import Swal from 'sweetalert2'



const AddProduct = () => {


    const handleCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const brandname = form.brandname.value;
        const modelname = form.modelname.value;
        const price = form.price.value;
      
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = {
          brandname,modelname, price,rating,photo,
        }
        console.log(newProduct);
        fetch('https://server-side-jeb6ttpo0-tamal-krishna-das-projects.vercel.app//product',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newProduct)
    
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Product Added successFully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
    }
    
      return (
        <div className="bg-white">
          <h1 className="text-black font-bold  text-2xl pt-10">Add a Product</h1>
  
        <form onSubmit={handleCoffee} className=" gap-20 mt-8 bg-white pb-10" >
        
          <div className="form-control ">
      <label className="label">
        <span className="label-text">  Brand</span>
      </label>
      <label className="input-group">
        
        <input type="text" name="brandname" placeholder=" Name " className="input input-bordered bg-white w-1/4" />
      </label>
    </div>
          <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Model</span>
      </label>
      <label className="input-group">
        
        <input type="text" name="modelname" placeholder="Name" className="input input-bordered bg-white w-1/3" />
      </label>
    </div> 
         
   
          <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <label className="input-group">
        
        <input type="text" name="price" placeholder="Price" className="input input-bordered bg-white" />
      </label>
    </div>
        
          <div className="form-control md:1/2 ">
      <label className="label">
        <span className="label-text">Rating</span>
      </label>
      <label className="input-group">
        
        <input type="text" name="rating" placeholder="Category " className="input input-bordered bg-white 1/4" />
      </label>
    </div>
    <textarea className="textarea textarea-info mt-5 bg-slate-100" placeholder="Description"></textarea>
        
        
          <div className="form-control w-full p-20 ">
      <label className="label">
        <span className="label-text">Image</span>
      </label>

      <label className="input-group">
        
        <input type="text" name="photo" placeholder="photo " className="input input-bordered bg-white w-full" />
        
      </label>
   
    <input type="submit" className="btn btn-block mt-5 mr-10" value="Add Product" />
    </div>
    
    
        
    
        </form>
        </div>
      );
    };
    
    export default AddProduct;