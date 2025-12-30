function Media() {
  return (
    <div className="mt-3 max-w-xl border border-green-500/60 rounded-lg p-4 bg-black/60 text-base">

      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-200 mb-3">
        Social & Media Links
      </h2>

      <div className="space-y-2 text-sm">

        <div>
          <span className="text-green-300 font-medium">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/adnan-hamdan-475b23375"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 underline hover:text-green-100 transition-all"
          >
            linkedin.com/in/adnan-hamdan-475b23375
          </a>
        </div>

        <div>
          <span className="text-green-300 font-medium">GitHub:</span>{" "}
          <a
            href="https://github.com/l1t48"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 underline hover:text-green-100 transition-all"
          >
            github.com/l1t48
          </a>
        </div>

        <div>
          <span className="text-green-300 font-medium">Email:</span>{" "}
          <a
            href="mailto:adnanhmdan7@gmail.com"
            className="text-green-200 underline hover:text-green-100 transition-all"
          >
            adnanhmdan7@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
}

export default Media;
