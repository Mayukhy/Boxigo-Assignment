import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Itemsaccordion({item}) {
  return (
    //Items are listing caregory wise
    <div className=' my-3'>
      <Accordion sx={{bgcolor:'#e3dddc',outline:'none',boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className=' flex gap-2 text-orange-600 font-bold'>{item?.displayName} <p className=' px-3 rounded-full bg-orange-600 text-white text-sm pt-0.5 '>{item?.category?.length}</p></p>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
<div className=' flex gap-10 flex-wrap bg-white p-4'>
    {item?.category?.map((name)=>(
            <div className=' flex flex-col'>
            <p className=' font-extrabold'>{name?.displayName}</p>
            {name?.items?.map((item)=>(
                <div>
                <div className=' flex justify-between gap-28 my-4'>
                <p>{item?.displayName}</p>
                <p className=' font-extrabold'>{item?.order}</p>
                </div>
                {item?.type?.map((type)=>(
                    <>
                    { type?.selected === true && <p className=' font-extrabold mt-[-15px] text-xs'>{type?.option?.split(",")}</p>}
                    </>
                ))}
                </div>
            ))}
        </div>
    ))}

</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}