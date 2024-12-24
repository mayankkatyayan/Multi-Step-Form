'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useFormStore } from '../../store/formStore';
import { useToast } from '../ui/ToastContext';

export default function Step4() {
  const { stepData } = useFormStore();
  const { showToast } = useToast();

  const handleSubmit = () => {
    showToast("Form submitted successfully! 🎉");
  };

  

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
      <p className="text-gray-700">Here is a summary of your information:</p>

      <div className="mt-4">
        <h3 className="font-semibold">Personal Information:</h3>
        <p>Full Name: {stepData.personalInfo?.fullName || 'Not provided'}</p>
        <p>Email: {stepData.personalInfo?.email || 'Not provided'}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Address:</h3>
        <p>Street: {stepData.address?.street || 'Not provided'}</p>
        <p>City: {stepData.address?.city || 'Not provided'}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Preferences:</h3>
        <p>Newsletter: {stepData.preferences?.newsletter ? 'Subscribed' : 'Not subscribed'}</p>
        <p>Notifications: {stepData.preferences?.notifications ? 'Enabled' : 'Disabled'}</p>
      </div>

      <div className="mt-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleSubmit}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Submit
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Click to submit your information and complete the process.
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
