import React from 'react';
import getProgrammingLanguageSvg from "../data/Logos";
import { Card, CardBody, Text, Tag } from "@chakra-ui/react";

type LanguageCardProps = {
    msg: string,
}

export const LanguageCard = (props: LanguageCardProps) => {
    return (
    //   <Card key={props.msg} size="sm">
    //     <CardBody>
    //       <Text>
    //         {getProgrammingLanguageSvg(props.msg, "24px", "24px")}
    //         {props.msg}
    //       </Text>
    //     </CardBody>
    //   </Card>
      <Tag size={"sm"} key={props.msg} variant='solid' colorScheme='black'>
        {getProgrammingLanguageSvg(props.msg, "24px", "24px")}
        {props.msg}
      </Tag>
    )
}
