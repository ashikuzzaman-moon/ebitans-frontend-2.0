import { headers } from 'next/headers';

export const getUrl = async (): Promise<string> => {
    const headersList = await headers(); // Await the headers here
    const host: string | null = headersList.get('host');
    const forwardedPath: string = headersList.get('x-forwarded-path') || '';
    let url: string = `${host}${forwardedPath}`;

    if (url.includes('www.')) {
        url = url.replace('www.', '');
    }

    return url;
};

// // Create a new Headers object
// const myHeaders = new Headers();

// // Append actual headers
// myHeaders.append("Host", ""); // Correctly setting the "Host" header
// myHeaders.append("X-Forwarded-Path", ""); // Example of another header

// // Now retrieve the "Host" and "X-Forwarded-Path" headers
// const host = myHeaders.get("Host"); // Should return "example.com"
// const forwardedPath = myHeaders.get("X-Forwarded-Path"); // Should return "/my/path"

// // Log the result
// console.log("Host:", host);
// console.log("Forwarded Path:", forwardedPath);

// // Create the URL
// const url = `${host}${forwardedPath}`;
// pages/api/getUrl.js

// export default function getUrl(req:any, res:any) {
//   // Access the request headers directly from req.headers
//   const host = req.headers['host']; // Get the 'Host' header from the request
//   const forwardedPath = req.headers['x-forwarded-path'] || ''; // Get 'x-forwarded-path', default to '' if not found

//   // Construct the URL from host and forwardedPath
//   const url = `${host}${forwardedPath}`;

//   // Send the generated URL as a response
//   res.status(200).json({ url });
//   console.log("Generated URL:", url);
// }
