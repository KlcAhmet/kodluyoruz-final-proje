import React, { useState, useEffect } from "react"
import axios from "axios"


const endpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}'
);


const getData = async (url) => {

    const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

    if (status >= 400)
        throw new Error(statusText);

    return data

};  // getData


export const main = async () => {
    /*   const result = await getData(endpoint);
      test(result) */
    /*  console.log(result); */


};  // main


main().catch(err => {
    console.error(err);
    process.exitCode = 1;
});

function test(data) {
    /* console.log(data.data[0]) */
    console.log(data)
}