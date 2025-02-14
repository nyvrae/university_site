"use client";

import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MyMap = () => {
    const mapState = {
        center: [53.893567, 27.545599],
        zoom: 17,
    };

    return (
        <YMaps>
            <div className="map__container max-w-[860px] mt-[15px] mb-[30px] lg:mb-[50px]">
                <Map
                    defaultState={mapState}
                    modules={["geoObject.addon.balloon"]}
                    className="w-full h-full aspect-[16/9]"
                >
                    <Placemark
                        geometry={[53.893567, 27.545599]}
                        properties={{
                            balloonContent: "БГУ",
                        }}
                    />
                </Map>
            </div>
        </YMaps>
    );
};

export default MyMap;
