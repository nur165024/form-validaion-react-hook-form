import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  // form validation 1
  const{register, handleSubmit, formState : {errors}} = useForm();
  const onSubmit = data => console.log(data);
  // const onSubmit1 = data => console.log(data);
  // form validaion 

  const Input = ({label, id, register, required}) => (
    <>
      <label>{label}</label>
      <input {...register(id, {required})}/>
    </>
  )



  return (
    <div className="App">
      <h2>Form validation object</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Name : " id="name" register={register} required />
        {errors.name && <span style={{ color:'red', display:'block' }}>Name field is required</span>}
        <br/>
        <Input label="Email : " id="email" register={register} required />
        {errors.email && <span style={{ color:'red', display:'block' }}>Email field is required</span>}
        <br/>
        <input type="submit" value="Signup"/>
      </form>
      
      {/* <br/>
      <br/>
      <br/>
      <h3>Form validation -1 </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name',{required : true, maxLength : 20})} id="name" placeholder="Enter your name" />
        <br/>
        {errors.name && <p style={{ color: 'red', padding: '0',margin: '0' }}>The Field is Required!</p>}

        <input type="email" {...register('email',{required : true})} id="email" placeholder="Enter your email" />
        <br/>
        {errors.email && <p style={{ color: 'red', padding: '0',margin: '0' }}>The Field is Required!</p>}

        <input type="password" {...register('password',{required : true, minLength : 6})} id="password" placeholder="Enter your password" />
        <br/>
        {errors.password && <p style={{ color: 'red', padding: '0',margin: '0' }}>The Field is Required!</p>}
        <br/>

        <input type="submit" value="Signup" />
      </form> */}
    </div>
  );
}

export default App;
