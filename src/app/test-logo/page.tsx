import Image from 'next/image';

export default function TestLogoPage() {
  const logoPath = '/page banner/lOGO.png';
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Logo Test Page</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-xl font-semibold mb-4">1. Using img tag with direct path:</h2>
        <div className="mb-8 p-4 border rounded bg-gray-50">
          <img 
            src={logoPath} 
            alt="Test Logo" 
            className="max-w-full h-auto border border-gray-300"
            onError={(e) => console.error('Error loading img tag:', e)}
          />
          <p className="mt-2 text-sm text-gray-600">Path: {logoPath}</p>
        </div>

        <h2 className="text-xl font-semibold mb-4">2. Using Next.js Image component:</h2>
        <div className="mb-8 p-4 border rounded bg-gray-50">
          <div className="relative w-64 h-16">
            <Image
              src={logoPath}
              alt="Test Logo"
              fill
              style={{ objectFit: 'contain' }}
              onError={(e) => console.error('Error loading Next Image:', e)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">Path: {logoPath}</p>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <h3 className="font-semibold text-yellow-800">Troubleshooting:</h3>
          <ul className="list-disc pl-5 mt-2 text-yellow-700 text-sm space-y-1">
            <li>Check browser's developer console (F12) for any error messages</li>
            <li>Verify the file exists at: public{logoPath}</li>
            <li>Try accessing the image directly: <a href={logoPath} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Open image in new tab</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
