import React from "react";
import { SectionHeader } from "../../components";
import cv from "../../assets/cv/landu.pdf";

export default function SectionHeaderContainer() {
  return (
    <SectionHeader>
      <SectionHeader.Container>
        <SectionHeader.Heading4>
          Hello I'M Khanyisa Landu
        </SectionHeader.Heading4>
        <SectionHeader.Heading1>
          I'M Future engineer, I am a team player.I am outgoing,dedicated, and
          open-minded
        </SectionHeader.Heading1>

        <SectionHeader.Download href={cv} target="_blank">
          DownLoad CV
        </SectionHeader.Download>
      </SectionHeader.Container>
    </SectionHeader>
  );
}
