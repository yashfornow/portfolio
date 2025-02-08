import emailjs from 'emailjs-com';
import {useState} from 'react';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const service_id = "service_2eludil";
    const template_id = "template_0vjt2tc";
    const public_key = "DxKdqgV2xIxzsdDFX";
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(service_id, template_id, e.target, public_key)
                        .then((result) => {
                            alert("Message sent");
                            setFormData({name:"", email:"", message:""});
                        }).catch(() => alert("Oops! Something went wrong. Please try again"));
    }
    return (
        <section id = "contact" className = "min-h-screen flex items-center justify-center py-20">
            <div className="px-4 w-150">
                <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Get in Touch </h2>
                <form className="space-y-6" onSubmit = {handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required  value = {formData.name} placeholder = "Name..."
                        onChange = {(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">
                        </input>

                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" required value = {formData.email} placeholder = "example@gmail.com"
                        onChange = {(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">
                        </input>

                    </div>

                    <div className="relative">
                        <textarea id="message" name="message" required row={5} value = {formData.message} placeholder = "Type your Message"
                        onChange = {(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">
                        </textarea>

                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium traansition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4">
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}