const MiddleCover = ({ title, img }) => {
    return (
        <div className="hero min-h-[400px] my-10" style={{ backgroundImage: `url("${img}")` }} >
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[900px] rounded-md py-20 bg-overlay ">
                    <h1 className="mb-5 text-white text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 mx-10 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates id quas quibusdam ullam hic quos veniam. Eaque, quo! Tempore, non.</p>
                </div>
            </div>
        </div>
    );
};

export default MiddleCover;