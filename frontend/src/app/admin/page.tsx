'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Building, Calendar, Loader2 } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requestAttempt, setRequestAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/contact', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch messages');
        return response.json();
      })
      .then((data: ContactMessage[]) => {
        setMessages(data);
        setError(null);
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          setError('Unable to load messages. Check that the API and database are running, then retry.');
          console.error('Failed to fetch messages:', error);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [requestAttempt]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-[#0F4C81] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#1E293B] font-poppins mb-4">Admin Dashboard</h1>
          <p className="text-gray-600">View and manage all incoming quotation requests and contact messages.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {error ? (
            <div role="alert" className="p-10 text-center">
              <p className="text-gray-600">{error}</p>
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  setRequestAttempt((attempt) => attempt + 1);
                }}
                className="mt-4 rounded-md bg-[#0F4C81] px-5 py-2 font-semibold text-white hover:bg-blue-900"
              >
                Retry
              </button>
            </div>
          ) : messages.length === 0 ? (
            <div className="p-10 text-center text-gray-500">No messages found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Contact Details</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Company</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Message</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {messages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-400 ml-6">
                          {new Date(msg.createdAt).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm font-semibold text-gray-900 mb-1">{msg.name}</div>
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Mail className="w-4 h-4 mr-2 text-gray-400" />
                          <a href={`mailto:${msg.email}`} className="hover:text-[#F97316]">{msg.email}</a>
                        </div>
                        {msg.phone && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                            {msg.phone}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-700">
                          <Building className="w-4 h-4 mr-2 text-gray-400" />
                          {msg.company || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm text-gray-600 line-clamp-3 max-w-md" title={msg.message}>
                          {msg.message}
                        </p>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          msg.status === 'UNREAD' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {msg.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
