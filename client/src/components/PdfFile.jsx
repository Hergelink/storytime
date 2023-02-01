import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    margin: 12,
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
});

export default function PdfFile({
  title,
  description,
  storyBody,
  storyEnd,
}) {
   
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        {/* <Image style={styles.image} src={image} /> */}
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{storyBody}</Text>
        <Text style={styles.text}>{storyEnd}</Text>
      </Page>
    </Document>
  );
}
