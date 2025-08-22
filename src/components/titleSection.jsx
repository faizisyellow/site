function TitleSection({ title = "Default Title" }) {
  return (
    <div className="w-full flex items-center gap-3 sm:gap-4 mb-4">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xlxl font-bold text-brand flex-shrink-0">
        {title}
      </h1>
      <div className="flex-1 border-t border-brand min-w-1 mt-3"></div>
    </div>
  );
}

export default TitleSection;
