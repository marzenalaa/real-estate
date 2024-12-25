const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-[280px] bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.alt}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="font-semibold">{testimonial.name}</h2>
          <p className="text-gray-500">
            {Array.from({ length: testimonial.rating }, (item, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </p>
        </div>
      </div>
      <p className="text-gray-900 font-medium my-4 text-center">
        {testimonial.title}
      </p>
      <p className="text-gray-700 text-center">{testimonial.text}</p>
    </div>
  );
};

export default TestimonialCard;
