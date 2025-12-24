import React from 'react';
import { Scale, Info, CheckCircle, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Scale size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Terms of Service</h1>
          <p className="text-slate-500">Effective Date: October 2024</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-lg">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-12">
            <p className="text-amber-800 text-sm font-medium">
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service.
            </p>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Info className="text-blue-600" size={24} />
                1. General Conditions
              </h2>
              <p className="text-slate-600">
                We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <CheckCircle className="text-blue-600" size={24} />
                2. Accuracy of Billing and Account Info
              </h2>
              <p className="text-slate-600">
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="text-blue-600" size={24} />
                3. User Comments and Feedback
              </h2>
              <p className="text-slate-600">
                If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">4. Prohibited Uses</h2>
              <p className="text-slate-600">
                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content for any unlawful purpose; to solicit others to perform or participate in any unlawful acts; or to violate any international, federal, or state regulations.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-slate-100 pt-10 text-center">
            <p className="text-slate-400 text-sm italic">
              Questions about the Terms of Service should be sent to us at legal@clickperhour.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;