const Stats = () => {
  return (
    <section className="bg-[#004030] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Box 1 */}
        <div className="bg-[#F4F0E4] text-[#004030] p-6 rounded-xl shadow-lg">
        <p>Lebih dari</p>
          <h1 className="text-3xl font-bold mb-2">25+</h1>
          <p className="text-sm font-medium">tahun mengajar</p>
        </div>

        {/* Box 2 */}
        <div className="bg-[#F4F0E4] text-[#004030] p-6 rounded-xl shadow-lg">
            <p>Telah lulus</p>
          <p className="text-3xl font-bold mb-2">200+</p>
          <p className="text-sm font-medium">Murid</p>
        </div>

        {/* Box 3 */}
        <div className="bg-[#F4F0E4] text-[#004030] p-6 rounded-xl shadow-lg">
            <p>Lebih dari</p>
          <p className="text-3xl font-bold mb-2">50+</p>
          <p className="text-sm font-medium">Guru berpengalan</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
