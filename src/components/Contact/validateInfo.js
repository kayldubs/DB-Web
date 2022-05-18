// export default function validateInfo(values) {
//     let errors = {};

//     if (!values.name.trim()) {
//         errors.name = "Name Required"
//     }
//     //email 
//     if (!values.email) {
//         errors.email = "Email Required"
//     } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(values.email)) {
//         errors.email = "Email address is invalid"
//     }
//     if(!values.job.trim()) {
//         errors.job = " Job Title Required"
//     }
//     if(!values.organization.trim()) {
//         errors.email = "Organization Required"
//     }
//  }