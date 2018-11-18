export const pageTransformer = (page) => {
    const newPage = page.map(ticket => {
        Object.keys(ticket.serviceData).forEach(service => (
            !ticket.serviceData[service] && ticket.serviceData[service] !== undefined) && delete ticket.serviceData[service]
        );
        return {
            coreData: ticket.coreData,
            serviceData: ticket.serviceData
        }
    })

    return newPage;
}