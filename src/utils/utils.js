// export const responseTransformer = (responses) => {
//     let pages = responses.map(response => response.data);
//     return pages.map(page => {
//         return page.map(ticket => {
//             Object.keys(ticket.serviceData).forEach(service => (
//                 !ticket.serviceData[service] && ticket.serviceData[service] !== undefined) && delete ticket.serviceData[service]
//             );
//             return {
//                 coreData: ticket.coreData,
//                 serviceData: ticket.serviceData
//             }
//         })
//     })
// }