'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  UploadCloud, CheckCircle2, AlertCircle, ArrowLeft, 
  Sparkles, ShieldCheck, RefreshCw, FileImage
} from 'lucide-react';

export default function UploadProfilePage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith('image/')) {
        setUploadStatus({
          success: false,
          message: 'Please select an image file (PNG, JPG, WEBP, etc.)'
        });
        return;
      }
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setUploadStatus(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (!droppedFile.type.startsWith('image/')) {
        setUploadStatus({
          success: false,
          message: 'Please drop an image file.'
        });
        return;
      }
      setFile(droppedFile);
      setPreviewUrl(URL.createObjectURL(droppedFile));
      setUploadStatus(null);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setUploadStatus(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload-profile', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setUploadStatus({
          success: true,
          message: 'Success! Your new profile image has been successfully uploaded and has overwritten the previous founder image. The dev server will reflect the change on the next compilation/reload.'
        });
        // Clear file state but keep preview as current active image representation
        setFile(null);
      } else {
        setUploadStatus({
          success: false,
          message: data.error || 'Something went wrong during the upload.'
        });
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus({
        success: false,
        message: 'Network error or failed to contact the server.'
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Banner / Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/about" 
            className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to About Page</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">Local Workspace</span>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Header Description */}
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium border border-orange-100">
              <Sparkles className="w-3 h-3" />
              <span>Direct File Overwriter Tool</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Founder Profile Image Uploader
            </h1>
            <p className="text-sm text-gray-500 max-w-xl">
              Since you don&apos;t have access to the file manager, this form allows you to upload and immediately replace the founder profile image (<code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-xs">hamad-chishty.jpg</code>) across the entire website.
            </p>
          </div>

          {/* Upload Form Box */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Drop / Select Area */}
              <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={triggerFileInput}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center space-y-4 ${
                  file ? 'border-orange-300 bg-orange-50/20' : 'border-gray-300 hover:border-orange-400 hover:bg-gray-50/50'
                }`}
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                
                {previewUrl ? (
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image 
                      src={previewUrl} 
                      alt="Preview" 
                      fill 
                      className="object-cover"
                      unoptimized
                      sizes="128px"
                    />
                  </div>
                ) : (
                  <div className="h-16 w-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                )}

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-700">
                    {file ? file.name : 'Click to select or drag & drop your image'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : 'Supports PNG, JPG, JPEG, WEBP'}
                  </p>
                </div>
              </div>

              {/* Status Message */}
              {uploadStatus && (
                <div className={`p-4 rounded-xl flex items-start space-x-3 text-sm ${
                  uploadStatus.success 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' 
                    : 'bg-rose-50 text-rose-800 border border-rose-100'
                }`}>
                  {uploadStatus.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="leading-relaxed">{uploadStatus.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Secure Local Workspace Write</span>
                </div>
                
                <button
                  type="submit"
                  disabled={!file || uploading}
                  className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    !file 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : uploading 
                        ? 'bg-orange-400 text-white cursor-wait'
                        : 'bg-orange-600 hover:bg-orange-700 text-white shadow-sm hover:shadow active:scale-98'
                  }`}
                >
                  {uploading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Uploading File...</span>
                    </>
                  ) : (
                    <>
                      <FileImage className="w-4 h-4" />
                      <span>Replace Founder Image</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Guidelines and instructions card */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-950 text-xs space-y-2">
            <h4 className="font-bold inline-flex items-center space-x-1.5 text-amber-900">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>How it works:</span>
            </h4>
            <ol className="list-decimal pl-4 space-y-1 text-amber-900/80">
              <li>Upload your real image on this page.</li>
              <li>The server will write it directly to the source directory <code className="bg-amber-100 px-1 py-0.5 rounded">src/assets/images/hamad-chishty.jpg</code>.</li>
              <li>This instantly replaces the old avatar for the <strong>CEO Portrait</strong>, <strong>About Page</strong>, <strong>Blog Author</strong>, and <strong>Author Bio Cards</strong> across all pages of your website.</li>
              <li>After uploading, refresh your browser. The updated photo will show up immediately.</li>
            </ol>
          </div>

        </div>
      </main>
    </div>
  );
}
