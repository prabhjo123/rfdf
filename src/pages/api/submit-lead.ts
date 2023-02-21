export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { 
      myKey1,
      waste_collection,
      business_premises,
      your_waste_collection,
      postcode,
      company_name,
      full_name,
      email,
      contact_number
    } = req.body;
    console.log(`Value of Mobile No. retrieved from request body: ${contact_number}`);
    const url = process.env.Api_Url;;
  
    const data = {
        Source: '7',
        BusinessPremises: business_premises,
        CompanyName: company_name,
        FullName: full_name,
        Email:email,
        PostCode: postcode,
        ContactNumber: contact_number,
        WasteType: myKey1 ,
        collectionFrequency: your_waste_collection,
        estimatedStart: waste_collection,
        UTMSource:' google',
        UTMMedium: 'ppc',
        UTMCampaign: '19527589369',
        UTMTerm: 'kwd-11109733327',
        UTMAdGroup: '148041222467',
        UTMDevice: 'c',
        UTMContent: '646544235055',
        UTMUniqueId: '3536745D',
        GclId: 'EAI'
    };

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    res.status(200).json(result);
    
  } else {
    res.status(404).json({ message: 'Invalid request method.' });
  }
}
