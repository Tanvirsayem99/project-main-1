

const Assingment = () => {
    const handleFrom = event =>{
        event.preventDefault()
        const form = event.target;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        fetch(url,{
            method : "POST",
            body: formData,
        })
        .then(res => res.json())
        .then(imageData => console.log(imageData.data.display_url))
    }
    return (
        <div className="my-20">
            <h1 className="text-center mb-1 font-semibold text-3xl">Submit Your Assignment</h1>
            <hr className=" mx-auto mb-5 border border-black w-5/6 md:w-2/6"/>
            <form action="" className="grid " onSubmit={handleFrom}>
            <input type="file" name="image" className="file-input file-input-bordered file-input-success w-full" required />
            <textarea name="desc" id="" cols="10" rows="10" className="bg-slate-200 border-2 border-success"></textarea>
            <button>submit</button>
            </form>
        </div>
    );
};

export default Assingment;