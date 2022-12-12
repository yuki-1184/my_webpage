import React from 'react';
import getProgrammingLanguageSvg from "../data/Logos";
import { Tag } from "@chakra-ui/react";

type LanguageCardProps = {
    msg: string,
}

export const LanguageTag = (props: LanguageCardProps) => {
    return (
      <Tag size={"sm"} key={props.msg} variant='solid' colorScheme='black'>
        {getProgrammingLanguageSvg(props.msg, "24px", "24px")}
        {props.msg}
      </Tag>
    )
}
