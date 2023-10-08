import React, { useState } from 'react'
import Itemsaccordion from '../components/Itemsaccordion';
import HomeIcon from '@mui/icons-material/Home';
import PlaceIcon from '@mui/icons-material/Place';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CategoryIcon from '@mui/icons-material/Category';
import EditIcon from '@mui/icons-material/Edit';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import moment from 'moment/moment';


export default function MoreDetails({ data }) {

    //for toggling the more details state of teh listed Moves
    const [showDetails, setShowDetails] = useState(false)
    return (
        <>
            <div className=' flex justify-between flex-wrap gap-7 mt-5'>
                <div className=' flex gap-1' >
                    <HomeIcon className=' text-orange-600' />
                    <p>{data?.property_size}</p>
                </div>
                <div className=' flex gap-1' >
                    <CategoryIcon className=' text-orange-600' />
                    <p>{data?.total_items}</p>
                </div>
                <div className=' flex gap-1' >
                    <PlaceIcon className=' text-orange-600' />
                    <p>{data?.distance}</p>
                </div>
                <div className=' flex gap-1 flex-wrap' >
                    <LocalShippingIcon className=' text-orange-600' />
                    <p>{moment(data?.moving_on).format('MMM Do YY, h:mm a')}</p>
                    <EditIcon className=' ml-1' />
                    <FormControlLabel
                        label="Is flexible"
                        sx={{ mt: '-10px' }}
                        control={
                            <Checkbox
                                sx={{ ml: 2 }}
                                value=""
                                checked={true}
                                color='warning'
                            />
                        }
                    />
                </div>

                {/* btns */}
                <div className=' flex gap-2 mt-[-10px]'>
                    <button onClick={() => setShowDetails(!showDetails)} className=' my-auto outline-none border border-orange-600 text-orange-600 rounded-sm py-2 px-3'>
                        {showDetails ? 'Hide move details' : 'View move details'}
                    </button>
                    <button className=' my-auto outline-none bg-orange-600 border-none text-white rounded-sm py-2 px-5'>
                        Quotes Awaiting
                    </button>
                </div>
            </div>

            <div className=' flex gap-1 mt-4 flex-wrap'>
                <div className=' flex gap-1'>
                    <ReportProblemIcon className=' text-orange-600' />
                    <p className=' font-bold'>Disclemer : </p>
                </div>
                <p className=' text-sm mt-0.5'>Please update your move date before two days of shifting</p>
            </div>
            {showDetails &&
                <div className=' animate-[slidedown_0.5s]'>
                    {/* more details */}
                    <br />
                    <br />

                    <div>
                        <div className=' flex justify-between'>
                            <p className=' font-extrabold text-lg'>Additional Information</p>
                            <button className=' my-auto outline-none bg-black border border-none text-white rounded-sm py-2 px-3.5 text-sm'>
                                Edit Additional Info
                            </button>
                        </div>
                        <br />
                        {data?.old_house_additional_info}
                    </div>
                    <br />

                    {/* House Details */}
                    <div>
                        <div className=' flex justify-between'>
                            <p className=' font-extrabold text-lg'> House Details</p>
                            <button className=' my-auto outline-none bg-black border border-none text-white rounded-sm py-2 px-3.5 text-sm'>
                                Edit House Details
                            </button>
                        </div>
                        <br />
                        {/* existing House Details */}
                        <p className=' font-bold text-orange-600'>
                            Existing House Details
                        </p>
                        <div className=' flex mt-2 justify-between'>
                            <div>
                                <p className=' font-extrabold'>Flore No.</p>
                                <p>{data?.old_floor_no}</p>
                            </div>
                            <div>
                                <p className=' font-extrabold'>Elevator Avallable</p>
                                <p>{data?.old_elevator_availability}</p>
                            </div>
                            <div>
                                <p className=' font-extrabold'>Distance from Elevator / Staircase to truck</p>
                                <p>{data?.old_parking_distance}</p>
                            </div>
                        </div>
                        <br />
                        {/* New house Details */}
                        <p className=' font-bold text-orange-600'>
                            New House Details
                        </p>
                        <div className=' flex mt-2 justify-between'>
                            <div>
                                <p className=' font-extrabold'>Flore No.</p>
                                <p>{data?.new_floor_no}</p>
                            </div>
                            <div>
                                <p className=' font-extrabold'>Elevator Avallable</p>
                                <p>{data?.new_elevator_availability}</p>
                            </div>
                            <div>
                                <p className=' font-extrabold'>Distance from Elevator / Staircase to truck</p>
                                <p>{data?.new_parking_distance}</p>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Inventory Details */}
                    <div>
                        <div className=' flex justify-between'>
                            <p className=' font-extrabold text-lg'>Inventory Details</p>
                            <button className=' my-auto outline-none bg-black border border-none text-white rounded-sm py-2 px-3.5 text-sm'>
                                Edit Inventory
                            </button>
                        </div>
                        {data?.items?.inventory?.map((item) => (

                            // Accordions for listing different items of different categories and options
                            <Itemsaccordion item={item} />
                        ))}
                    </div>

                </div>}
        </>
    )
}
