import React from 'react';
import { IPin } from '../models/IPin';

const PinComp = (pin: IPin) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={`https://source.unsplash.com/400x300/?${pin.title}`}
            alt={pin.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{pin.title}</div>
            <p className="text-gray-700 text-base">{pin.desc}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Rating: {pin.rating}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Latitude: {pin.lat}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Longitude: {pin.long}
            </span>
          </div>
        </div>
      );
    };

export default PinComp;
