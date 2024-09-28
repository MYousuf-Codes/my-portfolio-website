export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mt-8 mb-8">Contact Me</h2>

        {/* Smaller card-like wrapper for the form */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-md mx-auto">

          <form
            className="space-y-4"
            action="https://formspree.io/f/mpwagjbl" // my Formspree form endpoint
            method="POST"
          >
            {/* Name input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                className="text-black peer p-3 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Name"
                required
              />
            </div>

            {/* Email input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                className="text-black peer p-3 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>

            {/* Message textarea */}
            <textarea
              name="message"
              className="text-black peer p-3 w-full border rounded-lg focus:outline-none focus:border-blue-500"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>

            {/* Submit button */}
            <button
              type="submit"
              className="bold w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
