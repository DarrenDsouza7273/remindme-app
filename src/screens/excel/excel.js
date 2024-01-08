import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import XLSX from 'xlsx';

const ExcelFetcherComponent = () => {
  const [excelData, setExcelData] = useState(null);

  const fetchExcelData = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      if (result.type === 'success') {
        const { uri } = result;

        const fileInfo = await FileSystem.getInfoAsync(uri);
        const arrayBuffer = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });

        const wb = XLSX.read(arrayBuffer, { type: 'base64' });

        /* Assuming only one sheet in the Excel file */
        const sheetName = wb.SheetNames[0];
        const parsedData = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);

        /* Log the parsed data for testing*/
        console.log('Parsed Excel Data:', parsedData);
        setExcelData(parsedData);
      }
    } catch (error) {
      console.error('Error fetching or parsing Excel file', error);
    }
  };

  return (
    <View>
      <Text>Excel Fetcher Component</Text>
      <Button title="Fetch Excel Data" onPress={fetchExcelData} />
      {excelData && (
        <View>
          <Text>Parsed Excel Data:</Text>
          {excelData.map((row, index) => (
            <Text key={index}>{JSON.stringify(row)}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default ExcelFetcherComponent;
