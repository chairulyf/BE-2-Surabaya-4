const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test', 
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex : true
}
);
// const registrasi = mongoose.model('Registrasi',{
//     nama : {
//         type: String,
//         required: true
//     },
//     email : {
//         type:String
//     },
//     password : {
//         type: String,
//         required: true
//     },
//     nohp : {
//         type: String,
//         required: true
//     },
// })
// //menambah 1 data
// const Registrasi = new registrasi({
//     nama : 'chairul',
//     email: 'chairul@gmail.com',
//     password : '12344',
//     nohp : '0976544',  
// })

// //simpan ke collection
// Registrasi.save().then((registrasi)=> console.log(registrasi))