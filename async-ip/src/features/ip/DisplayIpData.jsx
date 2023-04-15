import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteIpData } from './ipSlice';

export default function DisplayIpData() {

    const ipData = useSelector(state => state.ip.value);
    const ipStatus = useSelector(state => state.ip.status);
    const [contentToDisplay, setContentToDisplay] = useState(null);
    const error = useSelector(state => state.ip.error);

    const dispatch = useDispatch();


    const IpDataContainer = ({city, id, ip, country_population, version, org, country_name, country_code, region, region_code, postal, timezone, utc_offset, currency, currency_name}) => {
        return (
          <div className="bg-white no-underline w-[30%] mt-4 text-sm mx-auto rounded-lg shadow-md">
            <div className="float-right mr-3 mt-3 text-white bg-black/30 rounded-lg cursor-pointer transition-all duration-300 hover:bg-red-500">
              <svg onClick={() => dispatch(deleteIpData({id}))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">City</th>
                  <td className="text-gray-700 p-5 ">{city}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">Country</th>
                  <td className="text-gray-700 p-5">{country_name}, {country_code}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">Region</th>
                  <td className="text-gray-700 p-5">{region}, {region_code}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">Postal Code</th>
                  <td className="text-gray-700 p-5">{postal}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">Timezone</th>
                  <td className="text-gray-700 p-5">{timezone}, {utc_offset}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">Currency</th>
                  <td className="text-gray-700 p-5">{currency}, {currency_name}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">IP</th>
                  <td className="text-gray-700 p-5">{ip}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">Version</th>
                  <td className="text-gray-700 p-5">{version}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-bold p-5">Organization</th>
                  <td className="text-gray-700 p-5">{org}</td>
                </tr>
                <tr>
                  <th className="text-left font-bold p-5">Country Population</th>
                  <td className="text-gray-700 p-5">{country_population}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      }
      

    useEffect(() => {
        if (ipStatus === "loading") {
          setContentToDisplay(
            <div className="animate-spin absolute left-[50%] mx-auto inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
          );
        } else {
          setContentToDisplay(
            ipData.map((item) => (
              <IpDataContainer
                key={item.ip}
                id={item.id}
                ip={item.ip}
                network={item.network}
                timezone={item.timezone}
                utc_offset={item.utc_offset}
                currency={item.currency}
                currency_name={item.currency_name}
                city={item.city}
                country_code={item.country_code}
                region={item.region}
                region_code={item.region_code}
                postal={item.postal}
                country_name={item.country_name}
                country_population={item.country_population}
                org={item.org}
                version={item.version}
              />
            ))
          );
        }
      }, [ipStatus, ipData]);
    return (
        <div className="flex flex-wrap items-center justify-center">
          {contentToDisplay}
          <h1 className="text-center w-full"> {error} </h1>
        </div>
    )
}
