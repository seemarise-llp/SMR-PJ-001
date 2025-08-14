"use client";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CallToAction({
  title = "Ready to Transform Your Manufacturing Process?",
  description = "Contact our team of experts today to discuss how JK SKY GROUP can help you achieve your manufacturing goals with our innovative solutions and exceptional service.",
  buttonText = "Request Consultation",
  onButtonClick,
}: CallToActionProps) {
  return (
    <section className="bg-gradient-to-r from-[#1A4DB4] to-[#68A7F5] py-16">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
            {title}
          </h2>
          <p className="mb-8 text-lg text-blue-100 lg:text-xl">
            {description}
          </p>
          <button
            onClick={() => onButtonClick?.()} // ✅ Safe call
            className="rounded-md bg-white px-8 py-4 text-lg font-medium text-blue-950 transition-colors hover:bg-black hover:text-white"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
