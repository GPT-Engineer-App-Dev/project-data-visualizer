import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, HStack, Text, Code, Divider } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [csvData, setCsvData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvString = e.target.result;
      const data = csvString.split("\n").map((row) => row.split(","));
      setCsvData(data.slice(1)); // Exclude header row
    };

    reader.readAsText(file);
  };

  const uniqueProjects = [...new Set(csvData.map((row) => row[0]))];

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Upload CSV</FormLabel>
          <Input type="file" accept=".csv" onChange={handleFileUpload} />
        </FormControl>

        {csvData.length > 0 && (
          <>
            <Text fontWeight="bold">Projects:</Text>
            <HStack spacing={4}>
              {uniqueProjects.map((projectId) => (
                <Button key={projectId} onClick={() => setSelectedProject(projectId)}>
                  {projectId}
                </Button>
              ))}
            </HStack>

            {selectedProject && (
              <>
                <Text fontWeight="bold">Code Edits for {selectedProject}:</Text>
                {csvData
                  .filter((row) => row[0] === selectedProject)
                  .map((row, index) => (
                    <Box key={index} borderWidth={1} borderRadius="md" p={4}>
                      <Text>Created At: {row[1]}</Text>
                      <Text>Created By: {row[2]}</Text>
                      {row[4] && (
                        <Code colorScheme="blue" p={2}>
                          {row[4]}
                        </Code>
                      )}
                      {row[3] !== "failed" && <Text>Commit SHA: {row[3]}</Text>}
                      <Divider my={4} />
                    </Box>
                  ))}
              </>
            )}
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
