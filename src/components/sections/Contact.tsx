import React, { useState, FormEvent, useRef } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import emailjs from '@emailjs/browser';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formValues.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormValues({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email send error:', error);
        setIsSubmitting(false);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <section id='contact' className='py-20 bg-white dark:bg-slate-900'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
            Get In{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>
              Touch
            </span>
          </h2>
          <div className='w-20 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto rounded-full'></div>
          <p className='mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Interested in working together? Feel free to reach out using the
            form below or connect directly via email or LinkedIn.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div className='bg-slate-50 dark:bg-slate-800 rounded-xl p-8 shadow-md'>
            <h3 className='text-xl font-semibold text-slate-800 dark:text-white mb-6'>
              Contact Information
            </h3>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full mr-4'>
                  <Mail
                    size={20}
                    className='text-emerald-600 dark:text-emerald-400'
                  />
                </div>
                <div>
                  <h4 className='text-sm font-medium text-slate-500 dark:text-slate-400 mb-1'>
                    Email
                  </h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className='text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full mr-4'>
                  <Linkedin
                    size={20}
                    className='text-emerald-600 dark:text-emerald-400'
                  />
                </div>
                <div>
                  <h4 className='text-sm font-medium text-slate-500 dark:text-slate-400 mb-1'>
                    LinkedIn
                  </h4>
                  <a
                    href={personalInfo.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className='mt-12'>
              <h3 className='text-xl font-semibold text-slate-800 dark:text-white mb-4'>
                Let's work together
              </h3>
              <p className='text-slate-600 dark:text-slate-300 mb-4'>
                Looking for someone who can not only test but also build tools
                to improve your QA process? I specialize in creating AI-powered
                solutions that reduce manual effort and accelerate testing
                workflows. Let’s discuss how I can help your team scale quality
                efficiently.
              </p>
            </div>
          </div>

          <div>
            <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
              {submitSuccess && (
                <div className='bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 p-4 rounded-lg mb-6 animate-fadeIn'>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder='John Doe'
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.name
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400`}
                />
                {formErrors.name && (
                  <p className='mt-1 text-sm text-red-500 dark:text-red-400'>
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder='john@example.com'
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.email
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400`}
                />
                {formErrors.email && (
                  <p className='mt-1 text-sm text-red-500 dark:text-red-400'>
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                >
                  Message/Inquiry
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formValues.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder='How can I help you?'
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.message
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400`}
                ></textarea>
                {formErrors.message && (
                  <p className='mt-1 text-sm text-red-500 dark:text-red-400'>
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium flex justify-center items-center ${
                  isSubmitting
                    ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700'
                } text-white transition-colors shadow-md hover:shadow-lg`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} className='ml-2' />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
