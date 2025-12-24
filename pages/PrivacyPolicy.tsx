import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Privacy Policy</h1>
          <p className="text-slate-500">Last Updated: October 2024</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-lg">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            At Click Per Hour, accessible from clickperhour.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Click Per Hour and how we use it.
          </p>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <FileText className="text-blue-600" size={24} />
                Information We Collect
              </h2>
              <p className="text-slate-600">
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Contact information such as name, email address, and phone number.</li>
                <li>Information provided during strategy calls or consultations.</li>
                <li>Website usage data through cookies and analytics.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Eye className="text-blue-600" size={24} />
                How We Use Your Information
              </h2>
              <p className="text-slate-600">We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Improve, personalize, and expand our website.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>Communicate with you for customer service and marketing.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Lock className="text-blue-600" size={24} />
                Data Security
              </h2>
              <p className="text-slate-600">
                We follow industry standards on information security management to safeguard sensitive information, such as financial information, intellectual property, employee details, and any other personal information entrusted to us.
              </p>
            </div>
          </div>

          <div className="mt-20 p-8 bg-blue-50 rounded-3xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Contact Us Regarding Privacy</h3>
            <p className="text-blue-800 text-sm">
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>privacy@clickperhour.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;