<file path="resultsdisplay/source/components/AssessmentSummary.jsx">
01: import React from 'react';
02: import { View, Text } from 'react-native';
03: import styles from '../styles';
04: 
05: const AssessmentSummary = ({ assessment, theme, severityColor }) => {
06:   try {
07:     const confidence = Number(assessment?.confidence) || 0;
08:     const severity = assessment?.severity || 'Mild';
09:     const condition = assessment?.condition || 'Unknown Condition';
10:     const assessmentDate = assessment?.assessmentDate || new Date().toISOString();
11: 
12:     const formatDate = (dateString) => {
13:       try {
14:         const date = new Date(dateString);
15:         return date.toLocaleDateString('en-US', {
16:           year: 'numeric',
17:           month: 'short',
18:           day: 'numeric',
19:           hour: '2-digit',
20:           minute: '2-digit'
21:         });
22:       } catch (err) {
23:         return 'Date unavailable';
24:       }
25:     };
26: 
27:     return (
28:       <View style={[styles.cardContainer, { backgroundColor: theme.background }]}>
29:         {/* Condition Title */}
30:         <Text nativeID="resultsdisplay-Text-conditionTitle" style={[styles.sectionTitle, { color: theme.text }]}>
31:           {String(condition)}
32:         </Text>
33: 
34:         {/* Summary Grid */}
35:         <View nativeID="resultsdisplay-View-summaryGrid" style={styles.summaryGrid}>
36:           {/* Confidence Item */}
37:           <View nativeID="resultsdisplay-View-confidenceItem" style={[styles.summaryItem, { borderColor: theme.primary }]}>
38:             <Text style={[styles.summaryItemLabel, { color: theme.primary }]}>
39:               Confidence
40:             </Text>
41:             <Text style={[styles.summaryItemValue, { color: theme.primary }]}>
42:               {Math.round(confidence)}%
43:             </Text>
44:             <View style={styles.confidenceBar}>
45:               <View
46:                 nativeID="resultsdisplay-View-confidenceFill"
47:                 style={[
48:                   styles.confidenceFill,
49:                   { width: `${Math.min(Math.max(confidence, 0), 100)}%`, backgroundColor: theme.primary }
50:                 ]}
51:               />
52:             </View>
53:           </View>
54: 
55:           {/* Severity Item */}
56:           <View nativeID="resultsdisplay-View-severityItem" style={[styles.summaryItem, { borderColor: severityColor }]}>
57:             <Text style={[styles.summaryItemLabel, { color: severityColor }]}>
58:               Severity
59:             </Text>
60:             <Text style={[styles.summaryItemValue, { color: severityColor }]}>
61:               {String(severity)}
62:             </Text>
63:           </View>
64:         </View>
65: 
66:         {/* Assessment Date */}
67:         <View nativeID="resultsdisplay-View-dateRow" style={styles.metadataRow}>
68:           <Text style={styles.metadataLabel}>Assessed:</Text>
69:           <Text style={[styles.metadataValue, { color: theme.text }]}>
70:             {formatDate(assessmentDate)}
71:           </Text>
72:         </View>
73:       </View>
74:     );
75:   } catch (err) {
76:     console.error('[APPTILE_AGENT] Error in AssessmentSummary:', err);
77:     return (
78:       <View style={[styles.cardContainer, { backgroundColor: theme.background }]}>
79:         <Text style={[styles.descriptionText, { color: theme.text }]}>Unable to display summary</Text>
80:       </View>
81:     );
82:   }
83: };
84: 
85: export default AssessmentSummary;
86: 

</file>
