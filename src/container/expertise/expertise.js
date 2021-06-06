import React from "react";
import { Expertise } from "../../components";
import { DownloadCVButton } from "../../components/buttons";
import { MMData } from "../../data/mmData";
import { subjectData1, subjectData2 } from "../../data/subjectData";
import group from "../../assets/Group_Assignment2.pdf";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Content>
        <Expertise.Text>
          My name is Khanyisa Landu. I am a first year student at VUT who is so
          busy studying a field of engineering which is electrical engineering.
        </Expertise.Text>
        <Expertise.Text>
          On the other side I have my own personal project which I am doing
          related to the innovation of an electric fan.
        </Expertise.Text>
        <Expertise.Text>
          In my free times I get busy with programming web application.
        </Expertise.Text>
      </Expertise.Content>
      <Expertise.Content>
        <Expertise.Title>
          <DownloadCVButton href={group} target="_blank">
            Project
          </DownloadCVButton>
        </Expertise.Title>
      </Expertise.Content>
      <Expertise.Subjects>
        <Expertise.Group>
          <Expertise.Title>High School Subjects</Expertise.Title>
          <Expertise.List>
            {subjectData1.map((item) => {
              return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
            })}
          </Expertise.List>
        </Expertise.Group>
        <Expertise.Group>
          <Expertise.Title>Modules</Expertise.Title>
          <Expertise.List>
            {subjectData2.map((item) => {
              return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
            })}
          </Expertise.List>
        </Expertise.Group>
      </Expertise.Subjects>
      <Expertise.MMTitle>Management Matrix</Expertise.MMTitle>
      <Expertise.MM>
        {MMData.map((item) => {
          return (
            <>
              <Expertise.MMBedge>{item.day}</Expertise.MMBedge>
              <Expertise.MMContent>
                <Expertise.MMText>{item.task}</Expertise.MMText>
              </Expertise.MMContent>
            </>
          );
        })}
      </Expertise.MM>
    </Expertise>
  );
}
