<file path="resultsdisplay/source/styles.js">
001: import { StyleSheet } from 'react-native';
002: 
003: const styles = StyleSheet.create({
004:   container: {
005:     flex: 1,
006:     backgroundColor: '#FFFFFF'
007:   },
008:   scrollView: {
009:     flex: 1
010:   },
011:   centerContainer: {
012:     flex: 1,
013:     justifyContent: 'center',
014:     alignItems: 'center',
015:     paddingHorizontal: 20
016:   },
017:   header: {
018:     paddingHorizontal: 20,
019:     paddingTop: 20,
020:     paddingBottom: 16,
021:     flexDirection: 'row',
022:     justifyContent: 'space-between',
023:     alignItems: 'flex-start'
024:   },
025:   headerContent: {
026:     flex: 1
027:   },
028:   headerTitle: {
029:     fontSize: 28,
030:     fontWeight: 'bold',
031:     color: '#FFFFFF',
032:     marginBottom: 12
033:   },
034:   severityBadge: {
035:     paddingHorizontal: 12,
036:     paddingVertical: 6,
037:     borderRadius: 20,
038:     alignSelf: 'flex-start',
039:     marginBottom: 8
040:   },
041:   severityBadgeText: {
042:     color: '#FFFFFF',
043:     fontSize: 12,
044:     fontWeight: '600',
045:     letterSpacing: 0.5
046:   },
047:   section: {
048:     marginHorizontal: 16,
049:     marginVertical: 12,
050:     paddingHorizontal: 16,
051:     paddingVertical: 16,
052:     borderRadius: 12,
053:     backgroundColor: '#F5F5F5'
054:   },
055:   sectionTitle: {
056:     fontSize: 18,
057:     fontWeight: '600',
058:     marginBottom: 12,
059:     color: '#333333'
060:   },
061:   cardContainer: {
062:     marginHorizontal: 16,
063:     marginVertical: 12,
064:     paddingHorizontal: 16,
065:     paddingVertical: 16,
066:     borderRadius: 12,
067:     backgroundColor: '#FFFFFF',
068:     borderWidth: 1,
069:     borderColor: '#E0E0E0',
070:     shadowColor: '#000',
071:     shadowOffset: { width: 0, height: 2 },
072:     shadowOpacity: 0.1,
073:     shadowRadius: 4,
074:     elevation: 3
075:   },
076:   imageContainer: {
077:     marginBottom: 16,
078:     borderRadius: 12,
079:     overflow: 'hidden',
080:     backgroundColor: '#F5F5F5',
081:     aspectRatio: 1,
082:     justifyContent: 'center',
083:     alignItems: 'center'
084:   },
085:   assessmentImage: {
086:     width: '100%',
087:     height: '100%'
088:   },
089:   noImagePlaceholder: {
090:     justifyContent: 'center',
091:     alignItems: 'center',
092:     width: '100%',
093:     height: '100%'
094:   },
095:   noImageText: {
096:     marginTop: 8,
097:     fontSize: 14,
098:     color: '#999999'
099:   },
100:   summaryGrid: {
101:     flexDirection: 'row',
102:     justifyContent: 'space-between',
103:     marginBottom: 12
104:   },
105:   summaryItem: {
106:     flex: 1,
107:     marginHorizontal: 6,
108:     paddingHorizontal: 12,
109:     paddingVertical: 14,
110:     borderRadius: 10,
111:     backgroundColor: '#FFFFFF',
112:     borderWidth: 1,
113:     borderColor: '#E0E0E0',
114:     alignItems: 'center',
115:     justifyContent: 'center'
116:   },
117:   summaryItemLabel: {
118:     fontSize: 11,
119:     fontWeight: '500',
120:     marginBottom: 6,
121:     color: '#666666',
122:     textTransform: 'uppercase',
123:     letterSpacing: 0.3
124:   },
125:   summaryItemValue: {
126:     fontSize: 18,
127:     fontWeight: 'bold',
128:     color: '#333333'
129:   },
130:   confidenceBar: {
131:     height: 6,
132:     backgroundColor: '#E0E0E0',
133:     borderRadius: 3,
134:     marginTop: 8,
135:     overflow: 'hidden'
136:   },
137:   confidenceFill: {
138:     height: '100%',
139:     borderRadius: 3
140:   },
141:   findingItem: {
142:     flexDirection: 'row',
143:     alignItems: 'flex-start',
144:     marginVertical: 8,
145:     paddingHorizontal: 8
146:   },
147:   findingIcon: {
148:     marginRight: 12,
149:     marginTop: 2
150:   },
151:   findingText: {
152:     flex: 1,
153:     fontSize: 14,
154:     lineHeight: 20,
155:     color: '#333333',
156:     marginLeft: 12
157:   },
158:   descriptionText: {
159:     fontSize: 14,
160:     lineHeight: 22,
161:     color: '#333333',
162:     marginBottom: 12
163:   },
164:   metadataRow: {
165:     flexDirection: 'row',
166:     alignItems: 'center',
167:     marginVertical: 8,
168:     paddingHorizontal: 8
169:   },
170:   metadataLabel: {
171:     fontSize: 12,
172:     fontWeight: '600',
173:     color: '#666666',
174:     marginRight: 8
175:   },
176:   metadataValue: {
177:     fontSize: 13,
178:     color: '#333333',
179:     flex: 1
180:   },
181:   recommendationItem: {
182:     flexDirection: 'row',
183:     alignItems: 'flex-start',
184:     marginVertical: 10,
185:     paddingHorizontal: 8
186:   },
187:   recommendationIcon: {
188:     marginRight: 12,
189:     marginTop: 2
190:   },
191:   recommendationText: {
192:     flex: 1,
193:     fontSize: 13,
194:     lineHeight: 20,
195:     color: '#333333',
196:     marginLeft: 12
197:   },
198:   preventionTipItem: {
199:     flexDirection: 'row',
200:     alignItems: 'flex-start',
201:     marginVertical: 10,
202:     paddingHorizontal: 8
203:   },
204:   preventionTipText: {
205:     flex: 1,
206:     fontSize: 13,
207:     lineHeight: 20,
208:     color: '#0D47A1',
209:     marginLeft: 12
210:   },
211:   warningItem: {
212:     flexDirection: 'row',
213:     alignItems: 'flex-start',
214:     paddingHorizontal: 12,
215:     paddingVertical: 10,
216:     backgroundColor: '#FFF3E0',
217:     borderLeftWidth: 4,
218:     borderLeftColor: '#FF6F00',
219:     marginVertical: 8,
220:     borderRadius: 4
221:   },
222:   warningIcon: {
223:     marginRight: 12,
224:     marginTop: 2
225:   },
226:   warningText: {
227:     flex: 1,
228:     fontSize: 13,
229:     lineHeight: 20,
230:     color: '#E65100'
231:   },
232:   buttonGroup: {
233:     marginHorizontal: 16,
234:     marginVertical: 20,
235:     gap: 12
236:   },
237:   primaryButton: {
238:     paddingHorizontal: 20,
239:     paddingVertical: 14,
240:     borderRadius: 10,
241:     justifyContent: 'center',
242:     alignItems: 'center',
243:     backgroundColor: '#2E7D32',
244:     flexDirection: 'row',
245:     shadowColor: '#000',
246:     shadowOffset: { width: 0, height: 2 },
247:     shadowOpacity: 0.15,
248:     shadowRadius: 4,
249:     elevation: 4
250:   },
251:   secondaryButton: {
252:     paddingHorizontal: 20,
253:     paddingVertical: 14,
254:     borderRadius: 10,
255:     justifyContent: 'center',
256:     alignItems: 'center',
257:     backgroundColor: '#FFFFFF',
258:     borderWidth: 2,
259:     borderColor: '#2E7D32',
260:     flexDirection: 'row'
261:   },
262:   tertiaryButton: {
263:     paddingHorizontal: 20,
264:     paddingVertical: 14,
265:     borderRadius: 10,
266:     justifyContent: 'center',
267:     alignItems: 'center',
268:     backgroundColor: '#F5F5F5',
269:     borderWidth: 1,
270:     borderColor: '#E0E0E0',
271:     flexDirection: 'row'
272:   },
273:   buttonText: {
274:     fontSize: 15,
275:     fontWeight: '600',
276:     color: '#FFFFFF',
277:     marginLeft: 8
278:   },
279:   secondaryButtonText: {
280:     fontSize: 15,
281:     fontWeight: '600',
282:     color: '#2E7D32',
283:     marginLeft: 8
284:   },
285:   tertiaryButtonText: {
286:     fontSize: 15,
287:     fontWeight: '600',
288:     color: '#333333',
289:     marginLeft: 8
290:   },
291:   loadingText: {
292:     fontSize: 16,
293:     color: '#333333'
294:   },
295:   noDataText: {
296:     fontSize: 18,
297:     fontWeight: '600',
298:     color: '#333333',
299:     textAlign: 'center'
300:   },
301:   noDataSubtext: {
302:     fontSize: 14,
303:     color: '#666666',
304:     textAlign: 'center'
305:   },
306:   footerSpacing: {
307:     height: 20
308:   }
309: });
310: 
311: export default styles;
312: 

</file>

