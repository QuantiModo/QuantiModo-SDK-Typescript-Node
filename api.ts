/**
 * QuantiModo
 * Welcome to QuantiModo API! QuantiModo makes it easy to retrieve normalized user data from a wide array of devices and applications. [Learn about QuantiModo](https://quantimo.do) or contact us at <api@quantimo.do>.         Before you get started, you will need to: * Sign in/Sign up, and add some data at [https://app.quantimo.do/api/v2/account/connectors](https://app.quantimo.do/api/v2/account/connectors) to try out the API for yourself * Create an app to get your client id and secret at [https://app.quantimo.do/api/v2/apps](https://app.quantimo.do/api/v2/apps) * As long as you're signed in, it will use your browser's cookie for authentication.  However, client applications must use OAuth2 tokens to access the API.     ## Application Endpoints These endpoints give you access to all authorized users' data for that application. ### Getting Application Token Make a `POST` request to `/api/v2/oauth/access_token`         * `grant_type` Must be `client_credentials`.         * `clientId` Your application's clientId.         * `client_secret` Your application's client_secret.         * `redirect_uri` Your application's redirect url.                ## Example Queries ### Query Options The standard query options for QuantiModo API are as described in the table below. These are the available query options in QuantiModo API: <table>            <thead>                <tr>                    <th>Parameter</th>                    <th>Description</th>                </tr>            </thead>            <tbody>                <tr>                    <td>limit</td>                    <td>The LIMIT is used to limit the number of results returned.  So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.</td>                </tr>                <tr>                    <td>offset</td>                    <td>Suppose you wanted to show results 11-20. You'd set the    offset to 10 and the limit to 10.</td>                </tr>                <tr>                    <td>sort</td>                    <td>Sort by given field. If the field is prefixed with '-', it    will sort in descending order.</td>                </tr>            </tbody>        </table>         ### Pagination Conventions Since the maximum limit is 200 records, to get more than that you'll have to make multiple API calls and page through the results. To retrieve all the data, you can iterate through data by using the `limit` and `offset` query parameters.For example, if you want to retrieve data from 61-80 then you can use a query with the following parameters,         `/v2/variables?limit=20&offset=60`         Generally, you'll be retrieving new or updated user data. To avoid unnecessary API calls, you'll want to store your last refresh time locally.  Initially, it should be set to 0. Then whenever you make a request to get new data, you should limit the returned results to those updated since your last refresh by appending append         `?lastUpdated=(ge)&quot2013-01-D01T01:01:01&quot`         to your request.         Also for better pagination, you can get link to the records of first, last, next and previous page from response headers: * `Total-Count` - Total number of results for given query * `Link-First` - Link to get first page records * `Link-Last` - Link to get last page records * `Link-Prev` - Link to get previous records set * `Link-Next` - Link to get next records set         Remember, response header will be only sent when the record set is available. e.g. You will not get a ```Link-Last``` & ```Link-Next``` when you query for the last page.         ### Filter operators support API supports the following operators with filter parameters: <br> **Comparison operators**         Comparison operators allow you to limit results to those greater than, less than, or equal to a specified value for a specified attribute. These operators can be used with strings, numbers, and dates. The following comparison operators are available: * `gt` for `greater than` comparison * `ge` for `greater than or equal` comparison * `lt` for `less than` comparison * `le` for `less than or equal` comparison         They are included in queries using the following format:         `(<operator>)<value>`         For example, in order to filter value which is greater than 21, the following query parameter should be used:         `?value=(gt)21` <br><br> **Equals/In Operators**         It also allows filtering by the exact value of an attribute or by a set of values, depending on the type of value passed as a query parameter. If the value contains commas, the parameter is split on commas and used as array input for `IN` filtering, otherwise the exact match is applied. In order to only show records which have the value 42, the following query should be used:         `?value=42`         In order to filter records which have value 42 or 43, the following query should be used:         `?value=42,43` <br><br> **Like operators**         Like operators allow filtering using `LIKE` query. This operator is triggered if exact match operator is used, but value contains `%` sign as the first or last character. In order to filter records which category that start with `Food`, the following query should be used:         `?category=Food%` <br><br> **Negation operator**         It is possible to get negated results of a query by prefixed the operator with `!`. Some examples:         `//filter records except those with value are not 42 or 43`<br> `?value=!42,43`         `//filter records with value not greater than 21`<br> `?value=!(ge)21` <br><br> **Multiple constraints for single attribute**         It is possible to apply multiple constraints by providing an array of query filters:         Filter all records which value is greater than 20.2 and less than 20.3<br> `?value[]=(gt)20.2&value[]=(lt)20.3`         Filter all records which value is greater than 20.2 and less than 20.3 but not 20.2778<br> `?value[]=(gt)20.2&value[]=(lt)20.3&value[]=!20.2778`<br><br> 
 *
 * OpenAPI spec version: 2.0.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import request = require('request');
import http = require('http');
import Promise = require('bluebird');

let defaultBasePath = 'https://app.quantimo.do/api';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export class CommonResponse {
    /**
    * Status code
    */
    'status': number;
    /**
    * Message
    */
    'message': string;
    'success': boolean;
}

export class Connection {
    /**
    * id
    */
    'id': number;
    /**
    * ID of user that owns this correlation
    */
    'userId': number;
    /**
    * The id for the connector data source for which the connection is connected
    */
    'connectorId': number;
    /**
    * Indicates whether a connector is currently connected to a service for a user.
    */
    'connectStatus': string;
    /**
    * Error message if there is a problem with authorizing this connection.
    */
    'connectError': string;
    /**
    * Time at which an update was requested by a user.
    */
    'updateRequestedAt': Date;
    /**
    * Indicates whether a connector is currently updated.
    */
    'updateStatus': string;
    /**
    * Indicates if there was an error during the update.
    */
    'updateError': string;
    /**
    * The time at which the connector was last successfully updated.
    */
    'lastSuccessfulUpdatedAt': Date;
    /**
    * When the record was first created. Use ISO 8601 datetime format
    */
    'createdAt': Date;
    /**
    * When the record in the database was last updated. Use ISO 8601 datetime format
    */
    'updatedAt': Date;
}

export class Connector {
    /**
    * Connector ID number
    */
    'id': number;
    /**
    * Connector lowercase system name
    */
    'name': string;
    /**
    * Connector pretty display name
    */
    'displayName': string;
    /**
    * URL to the image of the connector logo
    */
    'image': string;
    /**
    * URL to a site where one can get this device or application
    */
    'getItUrl': string;
    /**
    * True if the authenticated user has this connector enabled
    */
    'connected': string;
    /**
    * URL and parameters used when connecting to a service
    */
    'connectInstructions': string;
    /**
    * Epoch timestamp of last sync
    */
    'lastUpdate': number;
    /**
    * Number of measurements obtained during latest update
    */
    'totalMeasurementsInLastUpdate': number;
    /**
    * True if user has no measurements for this connector
    */
    'noDataYet': boolean;
}

export class ConnectorInfo {
    /**
    * Connector ID number
    */
    'id': number;
    /**
    * True if the authenticated user has this connector enabled
    */
    'connected': boolean;
    /**
    * Error message. Empty if connected.
    */
    'error': string;
    'history': Array<ConnectorInfoHistoryItem>;
}

export class ConnectorInfoHistoryItem {
    /**
    * Number of measurements
    */
    'numberOfMeasurements': number;
    /**
    * True if the update was successfull
    */
    'success': boolean;
    /**
    * Error message.
    */
    'message': string;
    /**
    * Date and time of the update in UTC time zone
    */
    'createdAt': string;
}

export class ConnectorInstruction {
    /**
    * url
    */
    'url': string;
    /**
    * parameters array
    */
    'parameters': Array<string>;
    /**
    * usePopup
    */
    'usePopup': boolean;
}

export class ConversionStep {
    /**
    * ADD or MULTIPLY
    */
    'operation': ConversionStep.OperationEnum;
    /**
    * This specifies the order of conversion steps starting with 0
    */
    'value': number;
}

export namespace ConversionStep {
    export enum OperationEnum { 
        OperationEnum_MULTIPLY = <any> 'MULTIPLY',
        OperationEnum_ADD = <any> 'ADD'
    }
}
export class Correlation {
    /**
    * Pearson correlation coefficient between cause and effect measurements
    */
    'correlationCoefficient': number;
    /**
    * ORIGINAL variable name of the cause variable for which the user desires correlations.
    */
    'cause': string;
    /**
    * original name of the cause.
    */
    'originalCause': string;
    /**
    * ORIGINAL variable name of the effect variable for which the user desires correlations.
    */
    'effect': string;
    /**
    * effect variable original name.
    */
    'originalEffect': string;
    /**
    * User estimated or default time after cause measurement before a perceivable effect is observed
    */
    'onsetDelay': number;
    /**
    * Time over which the cause is expected to produce a perceivable effect following the onset delay
    */
    'durationOfAction': number;
    /**
    * Number of points that went into the correlation calculation
    */
    'numberOfPairs': number;
    /**
    * Magnitude of the effects of a cause indicating whether it's practically meaningful.
    */
    'effectSize': string;
    /**
    * A function of the effect size and sample size
    */
    'statisticalSignificance': string;
    /**
    * Time at which correlation was calculated
    */
    'timestamp': number;
    /**
    * Correlation when cause and effect are reversed. For any causal relationship, the forward correlation should exceed the reverse correlation.
    */
    'reverseCorrelation': number;
    /**
    * 
    */
    'causalityFactor': number;
    /**
    * Variable category of the cause variable.
    */
    'causeCategory': string;
    /**
    * Variable category of the effect variable.
    */
    'effectCategory': string;
    /**
    * cause value that predicts an above average effect value (in default unit for cause variable)
    */
    'valuePredictingHighOutcome': number;
    /**
    * cause value that predicts a below average effect value (in default unit for cause variable)
    */
    'valuePredictingLowOutcome': number;
    /**
    * Optimal Pearson Product
    */
    'optimalPearsonProduct': number;
    /**
    * Average Vote
    */
    'averageVote': number;
    /**
    * User Vote
    */
    'userVote': number;
    /**
    * Unit of the predictor variable
    */
    'causeUnit': string;
    /**
    * Unit Id of the predictor variable
    */
    'causeUnitId': number;
}

export class Credential {
    /**
    * ID of user that owns this credential
    */
    'userId': number;
    /**
    * The id for the connector data source from which the credential was obtained
    */
    'connectorId': number;
    /**
    * Attribute name such as token, userid, username, or password
    */
    'attrKey': string;
    /**
    * Encrypted value for the attribute specified
    */
    'attrValue': string;
    /**
    * When the record was first created. Use ISO 8601 datetime format
    */
    'createdAt': Date;
    /**
    * When the record in the database was last updated. Use ISO 8601 datetime format
    */
    'updatedAt': Date;
}

export class HumanTime {
    /**
    * date time
    */
    'date': string;
    'timezoneType': number;
    /**
    * timezone of date time
    */
    'timezone': string;
}

export class InlineResponse200 {
    'success': boolean;
    'data': Array<TrackingReminderNotification>;
}

export class InlineResponse2001 {
    'success': boolean;
    'data': Array<TrackingReminder>;
}

export class InlineResponse20010 {
    'success': boolean;
    'data': Array<Vote>;
}

export class InlineResponse20011 {
    'success': boolean;
    'data': Measurement;
}

export class InlineResponse20012 {
    'success': boolean;
    'data': string;
}

export class InlineResponse2002 {
    'success': boolean;
    'data': TrackingReminder;
}

export class InlineResponse2003 {
    'success': boolean;
    'data': Array<Connection>;
}

export class InlineResponse2004 {
    'data': Array<Credential>;
    'success': boolean;
}

export class InlineResponse2005 {
    'success': boolean;
    'data': Array<Measurement>;
}

export class InlineResponse2006 {
    'success': boolean;
    'data': Array<Update>;
}

export class InlineResponse2007 {
    'success': boolean;
    'data': Array<UserVariableRelationship>;
}

export class InlineResponse2008 {
    'success': boolean;
    'data': Array<UserVariable>;
}

export class InlineResponse2009 {
    'success': boolean;
    'data': Array<VariableUserSource>;
}

export class JsonErrorResponse {
    /**
    * Status: \"ok\" or \"error\"
    */
    'status': string;
    /**
    * Error message
    */
    'message': string;
}

export class Measurement {
    /**
    * ORIGINAL Name of the variable for which we are creating the measurement records
    */
    'variable': string;
    /**
    * Application or device used to record the measurement values
    */
    'source': string;
    /**
    * Start Time for the measurement event in ISO 8601
    */
    'startTime': string;
    /**
    * Start Time for the measurement event in ISO 8601
    */
    'humanTime': HumanTime;
    /**
    * Converted measurement value in requested unit
    */
    'value': number;
    /**
    * Unit of measurement as requested in GET request
    */
    'unit': string;
    /**
    * Original value
    */
    'originalValue': number;
    /**
    * Measurement value in the unit as orignally submitted
    */
    'storedValue': number;
    /**
    * Unit of measurement as originally submitted
    */
    'storedAbbreviatedUnitName': string;
    /**
    * Original Unit of measurement as originally submitted
    */
    'originalAbbreviatedUnitName': string;
    /**
    * Unit of measurement as originally submitted
    */
    'abbreviatedUnitName': string;
    /**
    * Note of measurement
    */
    'note': string;
}

export class MeasurementDelete {
    /**
    * Variable id of the measurement to be deleted
    */
    'variableId': number;
    /**
    * Start time of the measurement to be deleted
    */
    'startTime': number;
}

export class MeasurementRange {
    /**
    * The timestamp of the earliest measurement for a user.
    */
    'lowerLimit': number;
    /**
    * The timestamp of the most recent measurement for a user.
    */
    'upperLimit': number;
}

export class MeasurementSet {
    /**
    * Array of timestamps, values, and optional notes
    */
    'measurements': Array<ValueObject>;
    /**
    * ORIGINAL name of the variable for which we are creating the measurement records
    */
    'variableName': string;
    /**
    * Name of the application or device used to record the measurement values
    */
    'sourceName': string;
    /**
    * Variable category name
    */
    'variableCategoryName': string;
    /**
    * Way to aggregate measurements over time. Options are \"MEAN\" or \"SUM\".  SUM should be used for things like minutes of exercise.  If you use MEAN for exercise, then a person might exercise more minutes in one day but add separate measurements that were smaller.  So when we are doing correlational analysis, we would think that the person exercised less that day even though they exercised more.  Conversely, we must use MEAN for things such as ratings which cannot be SUMMED.
    */
    'combinationOperation': MeasurementSet.CombinationOperationEnum;
    /**
    * Unit of measurement
    */
    'abbreviatedUnitName': string;
}

export namespace MeasurementSet {
    export enum CombinationOperationEnum { 
        CombinationOperationEnum_MEAN = <any> 'MEAN',
        CombinationOperationEnum_SUM = <any> 'SUM'
    }
}
export class MeasurementSource {
    /**
    * Name of the application or device.
    */
    'name': string;
}

export class Pairs {
    /**
    * Category name
    */
    'name': string;
}

export class Permission {
    /**
    * Grant permission to target user or public so they may access measurements within the given parameters. TODO: Rename target to something more intuitive.
    */
    'target': number;
    /**
    * ORIGINAL Variable name
    */
    'variableName': string;
    /**
    * Earliest time when measurements will be accessible in epoch seconds
    */
    'minTimestamp': number;
    /**
    * Latest time when measurements will be accessible in epoch seconds
    */
    'maxTimestamp': number;
    /**
    * Earliest time of day when measurements will be accessible in epoch seconds
    */
    'minTimeOfDay': number;
    /**
    * Latest time of day when measurements will be accessible in epoch seconds
    */
    'maxTimeOfDay': number;
    /**
    * Maybe specifies if only weekday measurements should be accessible
    */
    'week': string;
}

export class PostCorrelation {
    /**
    * Cause variable name
    */
    'cause': string;
    /**
    * Effect variable name
    */
    'effect': string;
    /**
    * Correlation value
    */
    'correlation': number;
    /**
    * Vote: 0 or 1
    */
    'vote': number;
}

export class PostVote {
    /**
    * Cause variable name
    */
    'cause': string;
    /**
    * Effect variable name
    */
    'effect': string;
    /**
    * Vote: 0 (for implausible) or 1 (for plausible)
    */
    'vote': boolean;
}

export class TrackingReminder {
    /**
    * id
    */
    'id': number;
    /**
    * clientId
    */
    'clientId': string;
    /**
    * ID of User
    */
    'userId': number;
    /**
    * Id for the variable to be tracked
    */
    'variableId': number;
    /**
    * Default value to use for the measurement when tracking
    */
    'defaultValue': number;
    /**
    * Earliest time of day at which reminders should appear in UTC HH:MM:SS format
    */
    'reminderStartTime': string;
    /**
    * Latest time of day at which reminders should appear in UTC HH:MM:SS format
    */
    'reminderEndTime': string;
    /**
    * String identifier for the sound to accompany the reminder
    */
    'reminderSound': string;
    /**
    * Number of seconds between one reminder and the next
    */
    'reminderFrequency': number;
    /**
    * True if the reminders should appear as a popup notification
    */
    'popUp': boolean;
    /**
    * True if the reminders should be delivered via SMS
    */
    'sms': boolean;
    /**
    * True if the reminders should be delivered via email
    */
    'email': boolean;
    /**
    * True if the reminders should appear in the notification bar
    */
    'notificationBar': boolean;
    /**
    * ISO 8601 timestamp for the last time a reminder was sent
    */
    'lastReminded': Date;
    /**
    * ISO 8601 timestamp for the last time a measurement was received for this user and variable
    */
    'lastTracked': Date;
    /**
    * Specific first time of day that the user should be reminded to track in UTC HH:MM:SS format
    */
    'firstDailyReminderTime': string;
    /**
    * Specific second time of day that the user should be reminded to track in UTC HH:MM:SS format
    */
    'secondDailyReminderTime': string;
    /**
    * Specific third time of day that the user should be reminded to track in UTC HH:MM:SS format
    */
    'thirdDailyReminderTime': string;
    /**
    * Earliest date on which the user should be reminded to track in YYYY-MM-DD format
    */
    'startTrackingDate': string;
    /**
    * Latest date on which the user should be reminded to track in YYYY-MM-DD format
    */
    'stopTrackingDate': string;
    /**
    * When the record in the database was last updated. Use ISO 8601 datetime format. Time zone should be UTC and not local.
    */
    'updatedAt': Date;
    /**
    * Name of the variable to be used when sending measurements
    */
    'variableName': string;
    /**
    * Name of the variable category to be used when sending measurements
    */
    'variableCategoryName': string;
    /**
    * Abbreviated name of the unit to be used when sending measurements
    */
    'abbreviatedUnitName': string;
    /**
    * The way multiple measurements are aggregated over time
    */
    'combinationOperation': TrackingReminder.CombinationOperationEnum;
}

export namespace TrackingReminder {
    export enum CombinationOperationEnum { 
        CombinationOperationEnum_MEAN = <any> 'MEAN',
        CombinationOperationEnum_SUM = <any> 'SUM'
    }
}
export class TrackingReminderDelete {
    /**
    * Id of the PENDING reminder to be deleted
    */
    'id': number;
}

export class TrackingReminderNotification {
    /**
    * id for the specific PENDING tracking remidner
    */
    'id': number;
    /**
    * id for the repeating tracking remidner
    */
    'trackingReminderId': number;
    /**
    * clientId
    */
    'clientId': string;
    /**
    * ID of User
    */
    'userId': number;
    /**
    * Id for the variable to be tracked
    */
    'variableId': number;
    /**
    * ISO 8601 timestamp for the specific time the variable should be tracked in UTC.  This will be used for the measurement startTime if the track endpoint is used.
    */
    'pendingReminderTime': Date;
    /**
    * Default value to use for the measurement when tracking
    */
    'defaultValue': number;
    /**
    * String identifier for the sound to accompany the reminder
    */
    'reminderSound': string;
    /**
    * True if the reminders should appear as a popup notification
    */
    'popUp': boolean;
    /**
    * True if the reminders should be delivered via SMS
    */
    'sms': boolean;
    /**
    * True if the reminders should be delivered via email
    */
    'email': boolean;
    /**
    * True if the reminders should appear in the notification bar
    */
    'notificationBar': boolean;
    /**
    * When the record in the database was last updated. Use ISO 8601 datetime format. Time zone should be UTC and not local.
    */
    'updatedAt': Date;
    /**
    * Name of the variable to be used when sending measurements
    */
    'variableName': string;
    /**
    * Name of the variable category to be used when sending measurements
    */
    'variableCategoryName': string;
    /**
    * Abbreviated name of the unit to be used when sending measurements
    */
    'abbreviatedUnitName': string;
    /**
    * The way multiple measurements are aggregated over time
    */
    'combinationOperation': TrackingReminderNotification.CombinationOperationEnum;
}

export namespace TrackingReminderNotification {
    export enum CombinationOperationEnum { 
        CombinationOperationEnum_MEAN = <any> 'MEAN',
        CombinationOperationEnum_SUM = <any> 'SUM'
    }
}
export class TrackingReminderNotificationSkip {
    /**
    * Id of the PENDING reminder to be skipped
    */
    'id': number;
}

export class TrackingReminderNotificationSnooze {
    /**
    * Id of the PENDING reminder to be snoozed
    */
    'id': number;
}

export class TrackingReminderNotificationTrack {
    /**
    * Id of the PENDING reminder to be tracked
    */
    'id': number;
}

export class Unit {
    /**
    * Unit name
    */
    'name': string;
    /**
    * Unit abbreviation
    */
    'abbreviatedName': string;
    /**
    * Unit category
    */
    'category': Unit.CategoryEnum;
    /**
    * The smallest acceptable value for measurements using this unit
    */
    'minimumValue': number;
    /**
    * The largest acceptable value for measurements using this unit
    */
    'maximumValue': number;
    /**
    * Conversion steps list
    */
    'conversionSteps': Array<ConversionStep>;
}

export namespace Unit {
    export enum CategoryEnum { 
        CategoryEnum_Distance = <any> 'Distance',
        CategoryEnum_Duration = <any> 'Duration',
        CategoryEnum_Energy = <any> 'Energy',
        CategoryEnum_Frequency = <any> 'Frequency',
        CategoryEnum_Miscellany = <any> 'Miscellany',
        CategoryEnum_Pressure = <any> 'Pressure',
        CategoryEnum_Proportion = <any> 'Proportion',
        CategoryEnum_Rating = <any> 'Rating',
        CategoryEnum_Temperature = <any> 'Temperature',
        CategoryEnum_Volume = <any> 'Volume',
        CategoryEnum_Weight = <any> 'Weight'
    }
}
export class UnitCategory {
    /**
    * Category name
    */
    'name': string;
}

export class Update {
    /**
    * id
    */
    'id': number;
    /**
    * user_id
    */
    'userId': number;
    /**
    * connector_id
    */
    'connectorId': number;
    /**
    * number_of_measurements
    */
    'numberOfMeasurements': number;
    /**
    * success
    */
    'success': boolean;
    /**
    * message
    */
    'message': string;
    /**
    * When the record was first created. Use ISO 8601 datetime format
    */
    'createdAt': Date;
    /**
    * When the record in the database was last updated. Use ISO 8601 datetime format
    */
    'updatedAt': Date;
}

export class User {
    /**
    * User id
    */
    'id': number;
    /**
    * Wordpress user id
    */
    'wpId': number;
    /**
    * User display name
    */
    'displayName': string;
    /**
    * User login name
    */
    'loginName': string;
    /**
    * User email
    */
    'email': string;
    /**
    * User token
    */
    'token': string;
    /**
    * Is user administrator
    */
    'administrator': boolean;
}

export class UserTag {
    /**
    * This is the id of the variable being tagged with an ingredient or something.
    */
    'taggedVariableId': number;
    /**
    * This is the id of the ingredient variable whose value is determined based on the value of the tagged variable.
    */
    'tagVariableId': number;
    /**
    * Number by which we multiply the tagged variable value to obtain the tag variable (ingredient) value
    */
    'conversionFactor': number;
}

export class UserTokenFailedResponse {
    /**
    * Status code
    */
    'code': number;
    /**
    * Message
    */
    'message': string;
    'success': boolean;
}

export class UserTokenRequest {
    'user': UserTokenRequestInnerUserField;
    /**
    * Organization Access token
    */
    'organizationAccessToken': string;
}

export class UserTokenRequestInnerUserField {
    /**
    * WordPress user ID
    */
    'id': number;
}

export class UserTokenSuccessfulResponse {
    /**
    * Status code
    */
    'code': number;
    /**
    * Message
    */
    'message': string;
    'user': UserTokenSuccessfulResponseInnerUserField;
}

export class UserTokenSuccessfulResponseInnerUserField {
    /**
    * WordPress user ID
    */
    'id': number;
    /**
    * User token
    */
    'accessToken': string;
}

export class UserVariable {
    /**
    * ID of the parent variable if this variable has any parent
    */
    'parentId': number;
    /**
    * User ID
    */
    'userId': number;
    /**
    * client_id
    */
    'clientId': string;
    /**
    * ID of variable
    */
    'variableId': number;
    /**
    * ID of unit to use for this variable
    */
    'defaultUnitId': number;
    /**
    * Minimum reasonable value for this variable (uses default unit)
    */
    'minimumAllowedValue': number;
    /**
    * Maximum reasonable value for this variable (uses default unit)
    */
    'maximumAllowedValue': number;
    /**
    * Value for replacing null measurements
    */
    'fillingValue': number;
    /**
    * The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables
    */
    'joinWith': number;
    /**
    * How long it takes for a measurement in this variable to take effect
    */
    'onsetDelay': number;
    /**
    * Estimated duration of time following the onset delay in which a stimulus produces a perceivable effect
    */
    'durationOfAction': number;
    /**
    * ID of variable category
    */
    'variableCategoryId': number;
    /**
    * updated
    */
    'updated': number;
    /**
    * Is variable public
    */
    'public': number;
    /**
    * A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user
    */
    'causeOnly': boolean;
    /**
    * 0 -> No filling, 1 -> Use filling-value
    */
    'fillingType': string;
    /**
    * Number of measurements
    */
    'numberOfMeasurements': number;
    /**
    * Number of processed measurements
    */
    'numberOfProcessedMeasurements': number;
    /**
    * Number of measurements at last analysis
    */
    'measurementsAtLastAnalysis': number;
    /**
    * ID of last Unit
    */
    'lastUnitId': number;
    /**
    * ID of last original Unit
    */
    'lastOriginalUnitId': number;
    /**
    * Last Value
    */
    'lastValue': number;
    /**
    * Last original value which is stored
    */
    'lastOriginalValue': number;
    /**
    * ID of last source
    */
    'lastSourceId': number;
    /**
    * Number of correlations for this variable
    */
    'numberOfCorrelations': number;
    /**
    * status
    */
    'status': string;
    /**
    * error_message
    */
    'errorMessage': string;
    /**
    * When this variable or its settings were last updated
    */
    'lastSuccessfulUpdateTime': Date;
    /**
    * Standard deviation
    */
    'standardDeviation': number;
    /**
    * Variance
    */
    'variance': number;
    /**
    * Minimum recorded value of this variable
    */
    'minimumRecordedValue': number;
    /**
    * Maximum recorded daily value of this variable
    */
    'maximumRecordedDailyValue': number;
    /**
    * Mean
    */
    'mean': number;
    /**
    * Median
    */
    'median': number;
    /**
    * Most common Unit ID
    */
    'mostCommonUnitId': number;
    /**
    * Most common value
    */
    'mostCommonValue': number;
    /**
    * Number of unique daily values
    */
    'numberOfUniqueDailyValues': number;
    /**
    * Number of changes
    */
    'numberOfChanges': number;
    /**
    * Skewness
    */
    'skewness': number;
    /**
    * Kurtosis
    */
    'kurtosis': number;
    /**
    * Latitude
    */
    'latitude': number;
    /**
    * Longitude
    */
    'longitude': number;
    /**
    * Location
    */
    'location': string;
    /**
    * Earliest measurement start_time to be used in analysis. Use ISO 8601 datetime format
    */
    'experimentStartTime': Date;
    /**
    * Latest measurement start_time to be used in analysis. Use ISO 8601 datetime format
    */
    'experimentEndTime': Date;
    /**
    * When the record was first created. Use ISO 8601 datetime format
    */
    'createdAt': Date;
    /**
    * When the record in the database was last updated. Use ISO 8601 datetime format
    */
    'updatedAt': Date;
    /**
    * Outcome variables (those with `outcome` == 1) are variables for which a human would generally want to identify the influencing factors.  These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables
    */
    'outcome': boolean;
    /**
    * Comma-separated list of source names to limit variables to those sources
    */
    'sources': string;
    /**
    * Earliest source time
    */
    'earliestSourceTime': number;
    /**
    * Latest source time
    */
    'latestSourceTime': number;
    /**
    * Earliest measurement time
    */
    'earliestMeasurementTime': number;
    /**
    * Latest measurement time
    */
    'latestMeasurementTime': number;
    /**
    * Earliest filling time
    */
    'earliestFillingTime': number;
    /**
    * Latest filling time
    */
    'latestFillingTime': number;
}

export class UserVariableRelationship {
    /**
    * id
    */
    'id': number;
    /**
    * Our confidence that a consistent predictive relationship exists based on the amount of evidence, reproducibility, and other factors
    */
    'confidenceLevel': string;
    /**
    * A quantitative representation of our confidence that a consistent predictive relationship exists based on the amount of evidence, reproducibility, and other factors
    */
    'confidenceScore': number;
    /**
    * Direction is positive if higher predictor values generally precede higher outcome values. Direction is negative if higher predictor values generally precede lower outcome values.
    */
    'direction': string;
    /**
    * Number of seconds over which the predictor variable event is expected to produce a perceivable effect following the onset delay
    */
    'durationOfAction': number;
    /**
    * error_message
    */
    'errorMessage': string;
    /**
    * User estimated (or default number of seconds) after cause measurement before a perceivable effect is observed
    */
    'onsetDelay': number;
    /**
    * Variable ID for the outcome variable
    */
    'outcomeVariableId': number;
    /**
    * Variable ID for the predictor variable
    */
    'predictorVariableId': number;
    /**
    * ID for default unit of the predictor variable
    */
    'predictorUnitId': number;
    /**
    * A value representative of the relevance of this predictor relative to other predictors of this outcome.  Usually used for relevancy sorting.
    */
    'sinnRank': number;
    /**
    * Can be weak, medium, or strong based on the size of the effect which the predictor appears to have on the outcome relative to other variable relationship strength scores.
    */
    'strengthLevel': string;
    /**
    * A value represented to the size of the effect which the predictor appears to have on the outcome.
    */
    'strengthScore': number;
    /**
    * user_id
    */
    'userId': number;
    /**
    * vote
    */
    'vote': string;
    /**
    * Value for the predictor variable (in it's default unit) which typically precedes an above average outcome value
    */
    'valuePredictingHighOutcome': number;
    /**
    * Value for the predictor variable (in it's default unit) which typically precedes a below average outcome value
    */
    'valuePredictingLowOutcome': number;
}

export class UserVariables {
    /**
    * User ID
    */
    'user': number;
    /**
    * Common variable id
    */
    'variableId': number;
    /**
    * Estimated duration of time following the onset delay in which a stimulus produces a perceivable effect
    */
    'durationOfAction': number;
    /**
    * fillingValue
    */
    'fillingValue': number;
    /**
    * joinWith
    */
    'joinWith': string;
    /**
    * maximumAllowedValue
    */
    'maximumAllowedValue': number;
    /**
    * minimumAllowedValue
    */
    'minimumAllowedValue': number;
    /**
    * onsetDelay
    */
    'onsetDelay': number;
    /**
    * Earliest measurement startTime that should be used in analysis in ISO format
    */
    'experimentStartTime': string;
    /**
    * Latest measurement startTime that should be used in analysis in ISO format
    */
    'experimentEndTime': string;
}

export class ValueObject {
    /**
    * Timestamp for the measurement event in epoch time (unixtime)
    */
    'timestamp': number;
    /**
    * Measurement value
    */
    'value': number;
    /**
    * Optional note to include with the measurement
    */
    'note': string;
}

export class Variable {
    /**
    * Variable ID
    */
    'id': number;
    /**
    * User-defined variable display name.
    */
    'name': string;
    /**
    * Name used when the variable was originally created in the `variables` table.
    */
    'originalName': string;
    /**
    * Variable category like Mood, Sleep, Physical Activity, Treatment, Symptom, etc.
    */
    'category': string;
    /**
    * Abbreviated name of the default unit for the variable
    */
    'abbreviatedUnitName': string;
    /**
    * Id of the default unit for the variable
    */
    'abbreviatedUnitId': number;
    /**
    * Comma-separated list of source names to limit variables to those sources
    */
    'sources': string;
    /**
    * Minimum reasonable value for this variable (uses default unit)
    */
    'minimumValue': number;
    /**
    * Maximum reasonable value for this variable (uses default unit)
    */
    'maximumValue': number;
    /**
    * Way to aggregate measurements over time. Options are \"MEAN\" or \"SUM\".  SUM should be used for things like minutes of exercise.  If you use MEAN for exercise, then a person might exercise more minutes in one day but add separate measurements that were smaller.  So when we are doing correlational analysis, we would think that the person exercised less that day even though they exercised more.  Conversely, we must use MEAN for things such as ratings which cannot be SUMMED.
    */
    'combinationOperation': Variable.CombinationOperationEnum;
    /**
    * Value for replacing null measurements
    */
    'fillingValue': number;
    /**
    * The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables.
    */
    'joinWith': string;
    /**
    * Array of Variables that are joined with this Variable
    */
    'joinedVariables': Array<Variable>;
    /**
    * Id of the parent variable if this variable has any parent
    */
    'parent': number;
    /**
    * Array of Variables that are sub variables to this Variable
    */
    'subVariables': Array<Variable>;
    /**
    * How long it takes for a measurement in this variable to take effect
    */
    'onsetDelay': number;
    /**
    * How long the effect of a measurement in this variable lasts
    */
    'durationOfAction': number;
    /**
    * Earliest measurement time
    */
    'earliestMeasurementTime': number;
    /**
    * Latest measurement time
    */
    'latestMeasurementTime': number;
    /**
    * When this variable or its settings were last updated
    */
    'updated': number;
    /**
    * A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user.
    */
    'causeOnly': number;
    /**
    * Number of correlations
    */
    'numberOfCorrelations': number;
    /**
    * Outcome variables (those with `outcome` == 1) are variables for which a human would generally want to identify the influencing factors.  These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables.
    */
    'outcome': number;
    /**
    * The number of measurements that a given user had for this variable the last time a correlation calculation was performed. Generally correlation values are only updated once the current number of measurements for a variable is more than 10% greater than the measurementsAtLastAnalysis.  This avoids a computationally-demanding recalculation when there's not enough new data to make a significant difference in the correlation.
    */
    'measurementsAtLastAnalysis': number;
    /**
    * Number of measurements
    */
    'numberOfMeasurements': number;
    /**
    * Last unit
    */
    'lastUnit': string;
    /**
    * Last value
    */
    'lastValue': number;
    /**
    * Most common value
    */
    'mostCommonValue': number;
    /**
    * Most common unit
    */
    'mostCommonUnit': string;
    /**
    * Last source
    */
    'lastSource': number;
}

export namespace Variable {
    export enum CombinationOperationEnum { 
        CombinationOperationEnum_MEAN = <any> 'MEAN',
        CombinationOperationEnum_SUM = <any> 'SUM'
    }
}
export class VariableCategory {
    /**
    * Category name
    */
    'name': string;
}

export class VariableNew {
    /**
    * User-defined variable display name.
    */
    'name': string;
    /**
    * Variable category like Mood, Sleep, Physical Activity, Treatment, Symptom, etc.
    */
    'category': string;
    /**
    * Abbreviated name of the default unit for the variable
    */
    'unit': string;
    /**
    * Way to aggregate measurements over time. Options are \"MEAN\" or \"SUM\".  SUM should be used for things like minutes of exercise.  If you use MEAN for exercise, then a person might exercise more minutes in one day but add separate measurements that were smaller.  So when we are doing correlational analysis, we would think that the person exercised less that day even though they exercised more.  Conversely, we must use MEAN for things such as ratings which cannot be SUMMED.
    */
    'combinationOperation': VariableNew.CombinationOperationEnum;
    /**
    * Parent
    */
    'parent': string;
}

export namespace VariableNew {
    export enum CombinationOperationEnum { 
        CombinationOperationEnum_MEAN = <any> 'MEAN',
        CombinationOperationEnum_SUM = <any> 'SUM'
    }
}
export class VariableUserSource {
    /**
    * ID of User
    */
    'userId': number;
    /**
    * ID of variable
    */
    'variableId': number;
    /**
    * ID of source
    */
    'sourceId': number;
    /**
    * Time that this measurement occurred Uses epoch minute (epoch time divided by 60)
    */
    'timestamp': number;
    /**
    * Earliest measurement time
    */
    'earliestMeasurementTime': number;
    /**
    * Latest measurement time
    */
    'latestMeasurementTime': number;
    /**
    * When the record was first created. Use ISO 8601 datetime format
    */
    'createdAt': Date;
    /**
    * When the record in the database was last updated. Use ISO 8601 datetime format
    */
    'updatedAt': Date;
}

/**
* New variables
*/
export class VariablesNew extends Array<VariableNew> {
}

export class Vote {
    /**
    * id
    */
    'id': number;
    /**
    * client_id
    */
    'clientId': string;
    /**
    * ID of User
    */
    'userId': number;
    /**
    * ID of the predictor variable
    */
    'causeId': number;
    /**
    * ID of effect variable
    */
    'effectId': number;
    /**
    * Value of Vote
    */
    'value': number;
    /**
    * When the record was first created. Use ISO 8601 datetime format
    */
    'createdAt': Date;
    /**
    * When the record in the database was last updated. Use ISO 8601 datetime format
    */
    'updatedAt': Date;
}

export class VoteDelete {
    /**
    * Cause variable name for the correlation to which the vote pertains
    */
    'cause': string;
    /**
    * Effect variable name for the correlation to which the vote pertains
    */
    'effect': string;
}


export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: request.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: request.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header") {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(requestOptions: request.Options): void {
        requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
}

export class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        // Do nothing
    }
}

export enum ApplicationEndpointsApiApiKeys {
    internalApiKey,
}

export class ApplicationEndpointsApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: ApplicationEndpointsApiApiKeys, value: string) {
        this.authentications[ApplicationEndpointsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get all Connections
     * Get all Connections
     * @param accessToken Application&#39;s OAuth2 access token
     * @param connectorId The id for the connector data source for which the connection is connected
     * @param connectStatus Indicates whether a connector is currently connected to a service for a user.
     * @param connectError Error message if there is a problem with authorizing this connection.
     * @param updateRequestedAt Time at which an update was requested by a user.
     * @param updateStatus Indicates whether a connector is currently updated.
     * @param updateError Indicates if there was an error during the update.
     * @param lastSuccessfulUpdatedAt The time at which the connector was last successfully updated.
     * @param createdAt When the record was first created. Use ISO 8601 datetime format 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationConnectionsGet (accessToken?: string, connectorId?: number, connectStatus?: string, connectError?: string, updateRequestedAt?: string, updateStatus?: string, updateError?: string, lastSuccessfulUpdatedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }> {
        const localVarPath = this.basePath + '/v2/application/connections';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (connectorId !== undefined) {
            queryParameters['connector_id'] = connectorId;
        }

        if (connectStatus !== undefined) {
            queryParameters['connect_status'] = connectStatus;
        }

        if (connectError !== undefined) {
            queryParameters['connect_error'] = connectError;
        }

        if (updateRequestedAt !== undefined) {
            queryParameters['update_requested_at'] = updateRequestedAt;
        }

        if (updateStatus !== undefined) {
            queryParameters['update_status'] = updateStatus;
        }

        if (updateError !== undefined) {
            queryParameters['update_error'] = updateError;
        }

        if (lastSuccessfulUpdatedAt !== undefined) {
            queryParameters['last_successful_updated_at'] = lastSuccessfulUpdatedAt;
        }

        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get all Credentials
     * Get all Credentials
     * @param accessToken Application&#39;s OAuth2 access token
     * @param connectorId The id for the connector data source from which the credential was obtained
     * @param attrKey Attribute name such as token, userid, username, or password
     * @param attrValue Encrypted value for the attribute specified
     * @param createdAt When the record was first created. Use ISO 8601 datetime format 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationCredentialsGet (accessToken?: string, connectorId?: number, attrKey?: string, attrValue?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2004;  }> {
        const localVarPath = this.basePath + '/v2/application/credentials';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (connectorId !== undefined) {
            queryParameters['connector_id'] = connectorId;
        }

        if (attrKey !== undefined) {
            queryParameters['attr_key'] = attrKey;
        }

        if (attrValue !== undefined) {
            queryParameters['attr_value'] = attrValue;
        }

        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2004;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get measurements for all users using your application
     * Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten.
     * @param accessToken Application&#39;s OAuth2 access token
     * @param clientId The ID of the client application which originally stored the measurement
     * @param connectorId The id for the connector data source from which the measurement was obtained
     * @param variableId ID of the variable for which we are creating the measurement records
     * @param sourceId Application or device used to record the measurement values
     * @param startTime start time for the measurement event. Use ISO 8601 datetime format 
     * @param value The value of the measurement after conversion to the default unit for that variable
     * @param unitId The default unit id for the variable
     * @param originalValue Unconverted value of measurement as originally posted (before conversion to default unit)
     * @param originalUnitId Unit id of the measurement as originally submitted
     * @param duration Duration of the event being measurement in seconds
     * @param note An optional note the user may include with their measurement
     * @param latitude Latitude at which the measurement was taken
     * @param longitude Longitude at which the measurement was taken
     * @param location Optional human readable name for the location where the measurement was recorded
     * @param createdAt When the record was first created. Use ISO 8601 datetime format 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
     * @param error An error message if there is a problem with the measurement
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationMeasurementsGet (accessToken?: string, clientId?: string, connectorId?: number, variableId?: number, sourceId?: number, startTime?: string, value?: number, unitId?: number, originalValue?: number, originalUnitId?: number, duration?: number, note?: string, latitude?: number, longitude?: number, location?: string, createdAt?: string, updatedAt?: string, error?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2005;  }> {
        const localVarPath = this.basePath + '/v2/application/measurements';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (clientId !== undefined) {
            queryParameters['client_id'] = clientId;
        }

        if (connectorId !== undefined) {
            queryParameters['connector_id'] = connectorId;
        }

        if (variableId !== undefined) {
            queryParameters['variable_id'] = variableId;
        }

        if (sourceId !== undefined) {
            queryParameters['source_id'] = sourceId;
        }

        if (startTime !== undefined) {
            queryParameters['start_time'] = startTime;
        }

        if (value !== undefined) {
            queryParameters['value'] = value;
        }

        if (unitId !== undefined) {
            queryParameters['unit_id'] = unitId;
        }

        if (originalValue !== undefined) {
            queryParameters['original_value'] = originalValue;
        }

        if (originalUnitId !== undefined) {
            queryParameters['original_unit_id'] = originalUnitId;
        }

        if (duration !== undefined) {
            queryParameters['duration'] = duration;
        }

        if (note !== undefined) {
            queryParameters['note'] = note;
        }

        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }

        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }

        if (location !== undefined) {
            queryParameters['location'] = location;
        }

        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }

        if (error !== undefined) {
            queryParameters['error'] = error;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2005;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get tracking reminders
     * Get the variable id, frequency, and default value for the user tracking reminders 
     * @param accessToken User&#39;s OAuth2 access token
     * @param clientId The ID of the client application which last created or updated this trackingReminder
     * @param createdAt When the record was first created. Use ISO 8601 datetime format 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationTrackingRemindersGet (accessToken?: string, clientId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }> {
        const localVarPath = this.basePath + '/v2/application/trackingReminders';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (clientId !== undefined) {
            queryParameters['client_id'] = clientId;
        }

        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get all Updates
     * Get all Updates
     * @param accessToken Application&#39;s OAuth2 access token
     * @param connectorId connector_id
     * @param numberOfMeasurements number_of_measurements
     * @param success success
     * @param message message
     * @param createdAt When the record was first created. Use ISO 8601 datetime format 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationUpdatesGet (accessToken?: string, connectorId?: number, numberOfMeasurements?: number, success?: boolean, message?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2006;  }> {
        const localVarPath = this.basePath + '/v2/application/updates';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (connectorId !== undefined) {
            queryParameters['connector_id'] = connectorId;
        }

        if (numberOfMeasurements !== undefined) {
            queryParameters['number_of_measurements'] = numberOfMeasurements;
        }

        if (success !== undefined) {
            queryParameters['success'] = success;
        }

        if (message !== undefined) {
            queryParameters['message'] = message;
        }

        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2006;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get all UserVariableRelationships
     * Get all UserVariableRelationships
     * @param accessToken User&#39;s OAuth2 access token
     * @param id id
     * @param confidenceLevel Our confidence that a consistent predictive relationship exists based on the amount of evidence, reproducibility, and other factors
     * @param confidenceScore A quantitative representation of our confidence that a consistent predictive relationship exists based on the amount of evidence, reproducibility, and other factors
     * @param direction Direction is positive if higher predictor values generally precede higher outcome values. Direction is negative if higher predictor values generally precede lower outcome values.
     * @param durationOfAction Estimated number of seconds following the onset delay in which a stimulus produces a perceivable effect
     * @param errorMessage error_message
     * @param onsetDelay Estimated number of seconds that pass before a stimulus produces a perceivable effect
     * @param outcomeVariableId Variable ID for the outcome variable
     * @param predictorVariableId Variable ID for the predictor variable
     * @param predictorUnitId ID for default unit of the predictor variable
     * @param sinnRank A value representative of the relevance of this predictor relative to other predictors of this outcome.  Usually used for relevancy sorting.
     * @param strengthLevel Can be weak, medium, or strong based on the size of the effect which the predictor appears to have on the outcome relative to other variable relationship strength scores.
     * @param strengthScore A value represented to the size of the effect which the predictor appears to have on the outcome.
     * @param vote vote
     * @param valuePredictingHighOutcome Value for the predictor variable (in it&#39;s default unit) which typically precedes an above average outcome value
     * @param valuePredictingLowOutcome Value for the predictor variable (in it&#39;s default unit) which typically precedes a below average outcome value
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationUserVariableRelationshipsGet (accessToken?: string, id?: number, confidenceLevel?: string, confidenceScore?: number, direction?: string, durationOfAction?: number, errorMessage?: string, onsetDelay?: number, outcomeVariableId?: number, predictorVariableId?: number, predictorUnitId?: number, sinnRank?: number, strengthLevel?: string, strengthScore?: number, vote?: string, valuePredictingHighOutcome?: number, valuePredictingLowOutcome?: number, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2007;  }> {
        const localVarPath = this.basePath + '/v2/application/userVariableRelationships';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (confidenceLevel !== undefined) {
            queryParameters['confidence_level'] = confidenceLevel;
        }

        if (confidenceScore !== undefined) {
            queryParameters['confidence_score'] = confidenceScore;
        }

        if (direction !== undefined) {
            queryParameters['direction'] = direction;
        }

        if (durationOfAction !== undefined) {
            queryParameters['duration_of_action'] = durationOfAction;
        }

        if (errorMessage !== undefined) {
            queryParameters['error_message'] = errorMessage;
        }

        if (onsetDelay !== undefined) {
            queryParameters['onset_delay'] = onsetDelay;
        }

        if (outcomeVariableId !== undefined) {
            queryParameters['outcome_variable_id'] = outcomeVariableId;
        }

        if (predictorVariableId !== undefined) {
            queryParameters['predictor_variable_id'] = predictorVariableId;
        }

        if (predictorUnitId !== undefined) {
            queryParameters['predictor_unit_id'] = predictorUnitId;
        }

        if (sinnRank !== undefined) {
            queryParameters['sinn_rank'] = sinnRank;
        }

        if (strengthLevel !== undefined) {
            queryParameters['strength_level'] = strengthLevel;
        }

        if (strengthScore !== undefined) {
            queryParameters['strength_score'] = strengthScore;
        }

        if (vote !== undefined) {
            queryParameters['vote'] = vote;
        }

        if (valuePredictingHighOutcome !== undefined) {
            queryParameters['value_predicting_high_outcome'] = valuePredictingHighOutcome;
        }

        if (valuePredictingLowOutcome !== undefined) {
            queryParameters['value_predicting_low_outcome'] = valuePredictingLowOutcome;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2007;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get all UserVariables
     * Get all UserVariables
     * @param accessToken User&#39;s OAuth2 access token
     * @param clientId The ID of the client application which last created or updated this user variable
     * @param parentId ID of the parent variable if this variable has any parent
     * @param variableId ID of variable
     * @param defaultUnitId D of unit to use for this variable
     * @param minimumAllowedValue Minimum reasonable value for this variable (uses default unit)
     * @param maximumAllowedValue Maximum reasonable value for this variable (uses default unit)
     * @param fillingValue Value for replacing null measurements
     * @param joinWith The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables
     * @param onsetDelay Estimated number of seconds that pass before a stimulus produces a perceivable effect
     * @param durationOfAction Estimated duration of time following the onset delay in which a stimulus produces a perceivable effect
     * @param variableCategoryId ID of variable category
     * @param updated updated
     * @param _public Is variable public
     * @param causeOnly A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user
     * @param fillingType 0 -&gt; No filling, 1 -&gt; Use filling-value
     * @param numberOfMeasurements Number of measurements
     * @param numberOfProcessedMeasurements Number of processed measurements
     * @param measurementsAtLastAnalysis Number of measurements at last analysis
     * @param lastUnitId ID of last Unit
     * @param lastOriginalUnitId ID of last original Unit
     * @param lastOriginalValue Last original value which is stored
     * @param lastValue Last Value
     * @param lastSourceId ID of last source
     * @param numberOfCorrelations Number of correlations for this variable
     * @param status status
     * @param errorMessage error_message
     * @param lastSuccessfulUpdateTime When this variable or its settings were last updated
     * @param standardDeviation Standard deviation
     * @param variance Variance
     * @param minimumRecordedValue Minimum recorded value of this variable
     * @param maximumRecordedValue Maximum recorded value of this variable
     * @param mean Mean
     * @param median Median
     * @param mostCommonUnitId Most common Unit ID
     * @param mostCommonValue Most common value
     * @param numberOfUniqueDailyValues Number of unique daily values
     * @param numberOfChanges Number of changes
     * @param skewness Skewness
     * @param kurtosis Kurtosis
     * @param latitude Latitude
     * @param longitude Longitude
     * @param location Location
     * @param createdAt When the record was first created. Use ISO 8601 datetime format 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
     * @param outcome Outcome variables (those with &#x60;outcome&#x60; &#x3D;&#x3D; 1) are variables for which a human would generally want to identify the influencing factors.  These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables
     * @param sources Comma-separated list of source names to limit variables to those sources
     * @param earliestSourceTime Earliest source time
     * @param latestSourceTime Latest source time
     * @param earliestMeasurementTime Earliest measurement time
     * @param latestMeasurementTime Latest measurement time
     * @param earliestFillingTime Earliest filling time
     * @param latestFillingTime Latest filling time
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationUserVariablesGet (accessToken?: string, clientId?: string, parentId?: number, variableId?: number, defaultUnitId?: number, minimumAllowedValue?: number, maximumAllowedValue?: number, fillingValue?: number, joinWith?: number, onsetDelay?: number, durationOfAction?: number, variableCategoryId?: number, updated?: number, _public?: number, causeOnly?: boolean, fillingType?: string, numberOfMeasurements?: number, numberOfProcessedMeasurements?: number, measurementsAtLastAnalysis?: number, lastUnitId?: number, lastOriginalUnitId?: number, lastOriginalValue?: number, lastValue?: number, lastSourceId?: number, numberOfCorrelations?: number, status?: string, errorMessage?: string, lastSuccessfulUpdateTime?: string, standardDeviation?: number, variance?: number, minimumRecordedValue?: number, maximumRecordedValue?: number, mean?: number, median?: number, mostCommonUnitId?: number, mostCommonValue?: number, numberOfUniqueDailyValues?: number, numberOfChanges?: number, skewness?: number, kurtosis?: number, latitude?: number, longitude?: number, location?: string, createdAt?: string, updatedAt?: string, outcome?: boolean, sources?: string, earliestSourceTime?: number, latestSourceTime?: number, earliestMeasurementTime?: number, latestMeasurementTime?: number, earliestFillingTime?: number, latestFillingTime?: number, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2008;  }> {
        const localVarPath = this.basePath + '/v2/application/userVariables';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (clientId !== undefined) {
            queryParameters['client_id'] = clientId;
        }

        if (parentId !== undefined) {
            queryParameters['parent_id'] = parentId;
        }

        if (variableId !== undefined) {
            queryParameters['variable_id'] = variableId;
        }

        if (defaultUnitId !== undefined) {
            queryParameters['default_unit_id'] = defaultUnitId;
        }

        if (minimumAllowedValue !== undefined) {
            queryParameters['minimum_allowed_value'] = minimumAllowedValue;
        }

        if (maximumAllowedValue !== undefined) {
            queryParameters['maximum_allowed_value'] = maximumAllowedValue;
        }

        if (fillingValue !== undefined) {
            queryParameters['filling_value'] = fillingValue;
        }

        if (joinWith !== undefined) {
            queryParameters['join_with'] = joinWith;
        }

        if (onsetDelay !== undefined) {
            queryParameters['onset_delay'] = onsetDelay;
        }

        if (durationOfAction !== undefined) {
            queryParameters['duration_of_action'] = durationOfAction;
        }

        if (variableCategoryId !== undefined) {
            queryParameters['variable_category_id'] = variableCategoryId;
        }

        if (updated !== undefined) {
            queryParameters['updated'] = updated;
        }

        if (_public !== undefined) {
            queryParameters['public'] = _public;
        }

        if (causeOnly !== undefined) {
            queryParameters['cause_only'] = causeOnly;
        }

        if (fillingType !== undefined) {
            queryParameters['filling_type'] = fillingType;
        }

        if (numberOfMeasurements !== undefined) {
            queryParameters['number_of_measurements'] = numberOfMeasurements;
        }

        if (numberOfProcessedMeasurements !== undefined) {
            queryParameters['number_of_processed_measurements'] = numberOfProcessedMeasurements;
        }

        if (measurementsAtLastAnalysis !== undefined) {
            queryParameters['measurements_at_last_analysis'] = measurementsAtLastAnalysis;
        }

        if (lastUnitId !== undefined) {
            queryParameters['last_unit_id'] = lastUnitId;
        }

        if (lastOriginalUnitId !== undefined) {
            queryParameters['last_original_unit_id'] = lastOriginalUnitId;
        }

        if (lastOriginalValue !== undefined) {
            queryParameters['last_original_value'] = lastOriginalValue;
        }

        if (lastValue !== undefined) {
            queryParameters['last_value'] = lastValue;
        }

        if (lastSourceId !== undefined) {
            queryParameters['last_source_id'] = lastSourceId;
        }

        if (numberOfCorrelations !== undefined) {
            queryParameters['number_of_correlations'] = numberOfCorrelations;
        }

        if (status !== undefined) {
            queryParameters['status'] = status;
        }

        if (errorMessage !== undefined) {
            queryParameters['error_message'] = errorMessage;
        }

        if (lastSuccessfulUpdateTime !== undefined) {
            queryParameters['last_successful_update_time'] = lastSuccessfulUpdateTime;
        }

        if (standardDeviation !== undefined) {
            queryParameters['standard_deviation'] = standardDeviation;
        }

        if (variance !== undefined) {
            queryParameters['variance'] = variance;
        }

        if (minimumRecordedValue !== undefined) {
            queryParameters['minimum_recorded_value'] = minimumRecordedValue;
        }

        if (maximumRecordedValue !== undefined) {
            queryParameters['maximum_recorded_value'] = maximumRecordedValue;
        }

        if (mean !== undefined) {
            queryParameters['mean'] = mean;
        }

        if (median !== undefined) {
            queryParameters['median'] = median;
        }

        if (mostCommonUnitId !== undefined) {
            queryParameters['most_common_unit_id'] = mostCommonUnitId;
        }

        if (mostCommonValue !== undefined) {
            queryParameters['most_common_value'] = mostCommonValue;
        }

        if (numberOfUniqueDailyValues !== undefined) {
            queryParameters['number_of_unique_daily_values'] = numberOfUniqueDailyValues;
        }

        if (numberOfChanges !== undefined) {
            queryParameters['number_of_changes'] = numberOfChanges;
        }

        if (skewness !== undefined) {
            queryParameters['skewness'] = skewness;
        }

        if (kurtosis !== undefined) {
            queryParameters['kurtosis'] = kurtosis;
        }

        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }

        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }

        if (location !== undefined) {
            queryParameters['location'] = location;
        }

        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }

        if (outcome !== undefined) {
            queryParameters['outcome'] = outcome;
        }

        if (sources !== undefined) {
            queryParameters['sources'] = sources;
        }

        if (earliestSourceTime !== undefined) {
            queryParameters['earliest_source_time'] = earliestSourceTime;
        }

        if (latestSourceTime !== undefined) {
            queryParameters['latest_source_time'] = latestSourceTime;
        }

        if (earliestMeasurementTime !== undefined) {
            queryParameters['earliest_measurement_time'] = earliestMeasurementTime;
        }

        if (latestMeasurementTime !== undefined) {
            queryParameters['latest_measurement_time'] = latestMeasurementTime;
        }

        if (earliestFillingTime !== undefined) {
            queryParameters['earliest_filling_time'] = earliestFillingTime;
        }

        if (latestFillingTime !== undefined) {
            queryParameters['latest_filling_time'] = latestFillingTime;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2008;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get all VariableUserSources
     * Get all VariableUserSources
     * @param accessToken User&#39;s OAuth2 access token
     * @param variableId ID of variable
     * @param timestamp Time that this measurement occurred Uses epoch minute (epoch time divided by 60)
     * @param earliestMeasurementTime Earliest measurement time
     * @param latestMeasurementTime Latest measurement time
     * @param createdAt When the record was first created. Use ISO 8601 datetime format 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationVariableUserSourcesGet (accessToken?: string, variableId?: number, timestamp?: number, earliestMeasurementTime?: number, latestMeasurementTime?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2009;  }> {
        const localVarPath = this.basePath + '/v2/application/variableUserSources';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (variableId !== undefined) {
            queryParameters['variable_id'] = variableId;
        }

        if (timestamp !== undefined) {
            queryParameters['timestamp'] = timestamp;
        }

        if (earliestMeasurementTime !== undefined) {
            queryParameters['earliest_measurement_time'] = earliestMeasurementTime;
        }

        if (latestMeasurementTime !== undefined) {
            queryParameters['latest_measurement_time'] = latestMeasurementTime;
        }

        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2009;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get all Votes
     * Get all Votes
     * @param accessToken User&#39;s OAuth2 access token
     * @param clientId The ID of the client application which last created or updated this vote
     * @param causeId ID of predictor variable
     * @param effectId ID of outcome variable
     * @param value Value of Vote. 1 is for upvote. 0 is for downvote.  Otherwise, there is no vote.
     * @param createdAt When the record was first created. Use ISO 8601 datetime format 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v2ApplicationVotesGet (accessToken?: string, clientId?: string, causeId?: number, effectId?: number, value?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse20010;  }> {
        const localVarPath = this.basePath + '/v2/application/votes';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (clientId !== undefined) {
            queryParameters['client_id'] = clientId;
        }

        if (causeId !== undefined) {
            queryParameters['cause_id'] = causeId;
        }

        if (effectId !== undefined) {
            queryParameters['effect_id'] = effectId;
        }

        if (value !== undefined) {
            queryParameters['value'] = value;
        }

        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse20010;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum AuthenticationApiApiKeys {
    internalApiKey,
}

export class AuthenticationApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: AuthenticationApiApiKeys, value: string) {
        this.authentications[AuthenticationApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Second Step in Social Authentication flow with JWT Token
     *  Here is the flow for how social authentication works with a JWT Token  1.**Client:** The client needs to open popup with social auth url (&#x60;https://app/quantimo.do/api/v2/auth/social/login?provider&#x3D;{provider}&amp;redirectUrl&#x3D;{url}&#x60;) of server with &#x60;provider&#x60; and &#x60;redirectUrl&#x60;. (Url should be registered with our social apps. Facebook and Twitter are fine with any redirect url with the same domain base url but Google needs exact redirect url.)   2.**Server:** The QM server will redirect user to that provider to get access.   3.**Client:** After successful or failed authentication, it will be redirected to given &#x60;redirectUrl&#x60; with code or error.   4.**Client:** The client needs to get that code and needs to send an Ajax request to server at &#x60;https://app.quantimo.do/api/v2/auth/social/authorizeCode?provider&#x3D;{provider}&amp;code&#x3D;{authorizationCode}&#x60;   5.**Server:** The QM server will authorize that code from the social connection and will authenticate user and will retrieve user info.   6.**Server:** The QM server will try to find existing user by unique identity. If the user already exists then it will login. Otherwise, it will create new user and will then login.   7.**Server:** Once user is found/created, it will return a JWT token for that user in the response.
     * @param code Authorization code obtained from the provider.
     * @param provider The current options are &#x60;google&#x60; and &#x60;facebook&#x60;.
     */
    public v2AuthSocialAuthorizeCodeGet (code: string, provider: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v2/auth/social/authorizeCode';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling v2AuthSocialAuthorizeCodeGet.');
        }

        // verify required parameter 'provider' is not null or undefined
        if (provider === null || provider === undefined) {
            throw new Error('Required parameter provider was null or undefined when calling v2AuthSocialAuthorizeCodeGet.');
        }

        if (code !== undefined) {
            queryParameters['code'] = code;
        }

        if (provider !== undefined) {
            queryParameters['provider'] = provider;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Native Social Authentication
     *       If you are using native authentication via Facebook or Google SDKs then you should use the following flow.   1.**Client:** Using native authentication via your native mobile app, get an access token using the instructions provided by the Facebook SDK (https://developers.facebook.com/docs/facebook-login) or Google (https://developers.google.com/identity/protocols/OAuth2)   2.**Client:** Send an Ajax request with provider name and access token on &#x60;https://app.quantimo.do/api/v2/auth/social/authorizeToken?provider&#x3D;{provider}&amp;accessToken&#x3D;{accessToken}&amp;refreshToken&#x3D;{refreshToken}&#x60; (&#x60;refreshToken&#x60; is optional)   3.**Server:** Server will try to get user info and will find existing user by unique identity. If user exist then it will do a login for that or it will create new user and will do login   4.**Server:** Once user is found/created, it will return a JWT token for that user in response   5.**Client:** After getting the JWT token to get a QM access token follow these steps and include your JWT token in them as a header (Authorization: Bearer **{yourJWThere}**) or as a url parameter (https://app.quantimo.do/api/v2/oauth/authorize?token&#x3D;{yourJWThere}). 
     * @param accessToken User&#39;s OAuth2 access token obtained from Google or FB native SDK
     * @param provider The current options are &#x60;google&#x60; and &#x60;facebook&#x60;.
     * @param refreshToken Optional refresh token obtained from Google or FB native SDK
     */
    public v2AuthSocialAuthorizeTokenGet (accessToken: string, provider: string, refreshToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v2/auth/social/authorizeToken';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'accessToken' is not null or undefined
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling v2AuthSocialAuthorizeTokenGet.');
        }

        // verify required parameter 'provider' is not null or undefined
        if (provider === null || provider === undefined) {
            throw new Error('Required parameter provider was null or undefined when calling v2AuthSocialAuthorizeTokenGet.');
        }

        if (refreshToken !== undefined) {
            queryParameters['refreshToken'] = refreshToken;
        }

        if (accessToken !== undefined) {
            queryParameters['accessToken'] = accessToken;
        }

        if (provider !== undefined) {
            queryParameters['provider'] = provider;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * First Setp in Social Authentication flow with JWT Token
     *  Here is the flow for how social authentication works with a JWT Token  1.**Client:** The client needs to open popup with social auth url (&#x60;https://app/quantimo.do/api/v2/auth/social/login?provider&#x3D;{provider}&amp;redirectUrl&#x3D;{url}&#x60;) of server with &#x60;provider&#x60; and &#x60;redirectUrl&#x60;. (Url should be registered with our social apps. Facebook and Twitter are fine with any redirect url with the same domain base url but Google needs exact redirect url.)   2.**Server:** The QM server will redirect user to that provider to get access.   3.**Client:** After successful or failed authentication, it will be redirected to given &#x60;redirectUrl&#x60; with code or error.   4.**Client:** The client needs to get that code and needs to send an Ajax request to server at &#x60;https://app.quantimo.do/api/v2/auth/social/authorizeCode?provider&#x3D;{provider}&amp;code&#x3D;{authorizationCode}&#x60;   5.**Server:** The QM server will authorize that code from the social connection and will authenticate user and will retrieve user info.   6.**Server:** The QM server will try to find existing user by unique identity. If the user already exists then it will login. Otherwise, it will create new user and will then login.   7.**Server:** Once user is found/created, it will return a JWT token for that user in the response.
     * @param redirectUrl The redirect URI is the URL within your client application that will receive the OAuth2 credentials. Url should be registered with our social apps. Facebook and Twitter are fine with any redirect url with the same domain base url but Google needs exact redirect url.
     * @param provider The current options are &#x60;google&#x60; and &#x60;facebook&#x60;.
     */
    public v2AuthSocialLoginGet (redirectUrl: string, provider: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v2/auth/social/login';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'redirectUrl' is not null or undefined
        if (redirectUrl === null || redirectUrl === undefined) {
            throw new Error('Required parameter redirectUrl was null or undefined when calling v2AuthSocialLoginGet.');
        }

        // verify required parameter 'provider' is not null or undefined
        if (provider === null || provider === undefined) {
            throw new Error('Required parameter provider was null or undefined when calling v2AuthSocialLoginGet.');
        }

        if (redirectUrl !== undefined) {
            queryParameters['redirectUrl'] = redirectUrl;
        }

        if (provider !== undefined) {
            queryParameters['provider'] = provider;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get a user access token
     * Client provides authorization token obtained from /api/v1/oauth2/authorize to this endpoint and receives an access token. Access token can then be used to query different API endpoints of QuantiModo. ### Request Access Token After user approves your access to the given scope form the https:/app.quantimo.do/v2/oauth2/authorize endpoint, you&#39;ll recevive an authorization code to request an access token. This time make a &#x60;POST&#x60; request to &#x60;/api/v2/oauth/access_token&#x60; with parameters including: * &#x60;grant_type&#x60; Can be &#x60;authorization_code&#x60; or &#x60;refresh_token&#x60; since we are getting the &#x60;access_token&#x60; for the first time we don&#39;t have a &#x60;refresh_token&#x60; so this must be &#x60;authorization_code&#x60;. * &#x60;code&#x60; Authorization code you received with the previous request. * &#x60;redirect_uri&#x60; Your application&#39;s redirect url.         ### Refreshing Access Token Access tokens expire at some point, to continue using our api you need to refresh them with &#x60;refresh_token&#x60; you received along with the &#x60;access_token&#x60;. To do this make a &#x60;POST&#x60; request to &#x60;/api/v2/oauth/access_token&#x60; with correct parameters, which are: * &#x60;grant_type&#x60; This time grant type must be &#x60;refresh_token&#x60; since we have it. * &#x60;clientId&#x60; Your application&#39;s client id. * &#x60;client_secret&#x60; Your application&#39;s client secret. * &#x60;refresh_token&#x60; The refresh token you received with the &#x60;access_token&#x60;. Every request you make to this endpoint will give you a new refresh token and make the old one expired. So you can keep getting new access tokens with new refresh tokens. ### Using Access Token Currently we support 2 ways for this, you can&#39;t use both at the same time. * Adding access token to the request header as &#x60;Authorization: Bearer {access_token}&#x60; * Adding to the url as a query parameter &#x60;?access_token&#x3D;{access_token}&#x60;         You can read more about OAuth2 from [here](http://oauth.net/2/)
     * @param clientId This is the unique ID that QuantiModo uses to identify your application. Obtain a client id by emailing info@quantimo.do.
     * @param clientSecret This is the secret for your obtained clientId. QuantiModo uses this to validate that only your application uses the clientId.
     * @param grantType Grant Type can be &#39;authorization_code&#39; or &#39;refresh_token&#39;
     * @param code Authorization code you received with the previous request.
     * @param responseType If the value is code, launches a Basic flow, requiring a POST to the token endpoint to obtain the tokens. If the value is token id_token or id_token token, launches an Implicit flow, requiring the use of Javascript at the redirect URI to retrieve tokens from the URI #fragment.
     * @param scope Scopes include basic, readmeasurements, and writemeasurements. The \&quot;basic\&quot; scope allows you to read user info (displayname, email, etc). The \&quot;readmeasurements\&quot; scope allows one to read a user&#39;s data. The \&quot;writemeasurements\&quot; scope allows you to write user data. Separate multiple scopes by a space.
     * @param redirectUri The redirect URI is the URL within your client application that will receive the OAuth2 credentials.
     * @param state An opaque string that is round-tripped in the protocol; that is to say, it is returned as a URI parameter in the Basic flow, and in the URI
     */
    public v2Oauth2AccessTokenGet (clientId: string, clientSecret: string, grantType: string, code: string, responseType?: string, scope?: string, redirectUri?: string, state?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v2/oauth2/access_token';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling v2Oauth2AccessTokenGet.');
        }

        // verify required parameter 'clientSecret' is not null or undefined
        if (clientSecret === null || clientSecret === undefined) {
            throw new Error('Required parameter clientSecret was null or undefined when calling v2Oauth2AccessTokenGet.');
        }

        // verify required parameter 'grantType' is not null or undefined
        if (grantType === null || grantType === undefined) {
            throw new Error('Required parameter grantType was null or undefined when calling v2Oauth2AccessTokenGet.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling v2Oauth2AccessTokenGet.');
        }

        if (clientId !== undefined) {
            queryParameters['clientId'] = clientId;
        }

        if (clientSecret !== undefined) {
            queryParameters['client_secret'] = clientSecret;
        }

        if (grantType !== undefined) {
            queryParameters['grant_type'] = grantType;
        }

        if (code !== undefined) {
            queryParameters['code'] = code;
        }

        if (responseType !== undefined) {
            queryParameters['response_type'] = responseType;
        }

        if (scope !== undefined) {
            queryParameters['scope'] = scope;
        }

        if (redirectUri !== undefined) {
            queryParameters['redirect_uri'] = redirectUri;
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Request Authorization Code
     * You can implement OAuth2 authentication to your application using our **OAuth2** endpoints.  You need to redirect users to &#x60;/api/v2/oauth/authorize&#x60; endpoint to get an authorization code and include the parameters below.   This page will ask the user if they want to allow a client&#39;s application to submit or obtain data from their QM account. It will redirect the user to the url provided by the client application with the code as a query parameter or error in case of an error.     See the /api/v2/oauth/access_token endpoint for the next steps.
     * @param clientId This is the unique ID that QuantiModo uses to identify your application. Obtain a client id by creating a free application at [https://admin.quantimo.do](https://admin.quantimo.do).
     * @param clientSecret This is the secret for your obtained clientId. QuantiModo uses this to validate that only your application uses the clientId.  Obtain this by creating a free application at [https://admin.quantimo.do](https://admin.quantimo.do).
     * @param responseType If the value is code, launches a Basic flow, requiring a POST to the token endpoint to obtain the tokens. If the value is token id_token or id_token token, launches an Implicit flow, requiring the use of Javascript at the redirect URI to retrieve tokens from the URI #fragment.
     * @param scope Scopes include basic, readmeasurements, and writemeasurements. The \&quot;basic\&quot; scope allows you to read user info (displayname, email, etc). The \&quot;readmeasurements\&quot; scope allows one to read a user&#39;s data. The \&quot;writemeasurements\&quot; scope allows you to write user data. Separate multiple scopes by a space.
     * @param redirectUri The redirect URI is the URL within your client application that will receive the OAuth2 credentials.
     * @param state An opaque string that is round-tripped in the protocol; that is to say, it is returned as a URI parameter in the Basic flow, and in the URI
     */
    public v2OauthAuthorizeGet (clientId: string, clientSecret: string, responseType: string, scope: string, redirectUri?: string, state?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v2/oauth/authorize';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling v2OauthAuthorizeGet.');
        }

        // verify required parameter 'clientSecret' is not null or undefined
        if (clientSecret === null || clientSecret === undefined) {
            throw new Error('Required parameter clientSecret was null or undefined when calling v2OauthAuthorizeGet.');
        }

        // verify required parameter 'responseType' is not null or undefined
        if (responseType === null || responseType === undefined) {
            throw new Error('Required parameter responseType was null or undefined when calling v2OauthAuthorizeGet.');
        }

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling v2OauthAuthorizeGet.');
        }

        if (clientId !== undefined) {
            queryParameters['clientId'] = clientId;
        }

        if (clientSecret !== undefined) {
            queryParameters['client_secret'] = clientSecret;
        }

        if (responseType !== undefined) {
            queryParameters['response_type'] = responseType;
        }

        if (scope !== undefined) {
            queryParameters['scope'] = scope;
        }

        if (redirectUri !== undefined) {
            queryParameters['redirect_uri'] = redirectUri;
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum ConnectorsApiApiKeys {
    internalApiKey,
}

export class ConnectorsApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: ConnectorsApiApiKeys, value: string) {
        this.authentications[ConnectorsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get embeddable connect javascript
     * Get embeddable connect javascript. Usage:    - Embedding in applications with popups for 3rd-party authentication windows.      Use &#x60;qmSetupInPopup&#x60; function after connecting &#x60;connect.js&#x60;.    - Embedding in applications with popups for 3rd-party authentication windows.      Requires a selector to block. It will be embedded in this block.      Use &#x60;qmSetupOnPage&#x60; function after connecting &#x60;connect.js&#x60;.    - Embedding in mobile applications without popups for 3rd-party authentication.      Use &#x60;qmSetupOnMobile&#x60; function after connecting &#x60;connect.js&#x60;.      if using the MoodiModo Clones, Use &#x60;qmSetupOnIonic&#x60; function after connecting &#x60;connect.js&#x60;. 
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1ConnectJsGet (accessToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/connect.js';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Mobile connect page
     * This page is designed to be opened in a webview.  Instead of using popup authentication boxes, it uses redirection. You can include the user&#39;s access_token as a URL parameter like https://app.quantimo.do/api/v1/connect/mobile?access_token&#x3D;123
     * @param accessToken User OAuth access token
     */
    public v1ConnectMobileGet (accessToken: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/connect/mobile';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'accessToken' is not null or undefined
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling v1ConnectMobileGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Obtain a token from 3rd party data source
     * Attempt to obtain a token from the data provider, store it in the database. With this, the connector to continue to obtain new user data until the token is revoked.
     * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1ConnectorsConnectorConnectGet (connector: string, accessToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/connectors/{connector}/connect'
            .replace('{' + 'connector' + '}', String(connector));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'connector' is not null or undefined
        if (connector === null || connector === undefined) {
            throw new Error('Required parameter connector was null or undefined when calling v1ConnectorsConnectorConnectGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Connection Instructions
     * Returns instructions that describe what parameters and endpoint to use to connect to the given data provider.
     * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
     * @param parameters JSON Array of Parameters for the request to enable connector.
     * @param url URL which should be used to enable the connector.
     * @param usePopup Should use popup when enabling connector
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1ConnectorsConnectorConnectInstructionsGet (connector: string, parameters: string, url: string, usePopup: boolean, accessToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/connectors/{connector}/connectInstructions'
            .replace('{' + 'connector' + '}', String(connector));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'connector' is not null or undefined
        if (connector === null || connector === undefined) {
            throw new Error('Required parameter connector was null or undefined when calling v1ConnectorsConnectorConnectInstructionsGet.');
        }

        // verify required parameter 'parameters' is not null or undefined
        if (parameters === null || parameters === undefined) {
            throw new Error('Required parameter parameters was null or undefined when calling v1ConnectorsConnectorConnectInstructionsGet.');
        }

        // verify required parameter 'url' is not null or undefined
        if (url === null || url === undefined) {
            throw new Error('Required parameter url was null or undefined when calling v1ConnectorsConnectorConnectInstructionsGet.');
        }

        // verify required parameter 'usePopup' is not null or undefined
        if (usePopup === null || usePopup === undefined) {
            throw new Error('Required parameter usePopup was null or undefined when calling v1ConnectorsConnectorConnectInstructionsGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (parameters !== undefined) {
            queryParameters['parameters'] = parameters;
        }

        if (url !== undefined) {
            queryParameters['url'] = url;
        }

        if (usePopup !== undefined) {
            queryParameters['usePopup'] = usePopup;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Connect Parameter
     * Returns instructions that describe what parameters and endpoint to use to connect to the given data provider.
     * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
     * @param displayName Name of the parameter that is user visible in the form
     * @param key Name of the property that the user has to enter such as username or password Connector (used in HTTP request)
     * @param placeholder Placeholder hint value for the parameter input tag.
     * @param type Type of input field such as those found here http://www.w3schools.com/tags/tag_input.asp
     * @param usePopup Should use popup when enabling connector
     * @param accessToken User&#39;s OAuth2 access token
     * @param defaultValue Default parameter value
     */
    public v1ConnectorsConnectorConnectParameterGet (connector: string, displayName: string, key: string, placeholder: string, type: string, usePopup: boolean, accessToken?: string, defaultValue?: string) : Promise<{ response: http.ClientResponse; body: ConnectorInstruction;  }> {
        const localVarPath = this.basePath + '/v1/connectors/{connector}/connectParameter'
            .replace('{' + 'connector' + '}', String(connector));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'connector' is not null or undefined
        if (connector === null || connector === undefined) {
            throw new Error('Required parameter connector was null or undefined when calling v1ConnectorsConnectorConnectParameterGet.');
        }

        // verify required parameter 'displayName' is not null or undefined
        if (displayName === null || displayName === undefined) {
            throw new Error('Required parameter displayName was null or undefined when calling v1ConnectorsConnectorConnectParameterGet.');
        }

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling v1ConnectorsConnectorConnectParameterGet.');
        }

        // verify required parameter 'placeholder' is not null or undefined
        if (placeholder === null || placeholder === undefined) {
            throw new Error('Required parameter placeholder was null or undefined when calling v1ConnectorsConnectorConnectParameterGet.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling v1ConnectorsConnectorConnectParameterGet.');
        }

        // verify required parameter 'usePopup' is not null or undefined
        if (usePopup === null || usePopup === undefined) {
            throw new Error('Required parameter usePopup was null or undefined when calling v1ConnectorsConnectorConnectParameterGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (defaultValue !== undefined) {
            queryParameters['defaultValue'] = defaultValue;
        }

        if (displayName !== undefined) {
            queryParameters['displayName'] = displayName;
        }

        if (key !== undefined) {
            queryParameters['key'] = key;
        }

        if (placeholder !== undefined) {
            queryParameters['placeholder'] = placeholder;
        }

        if (type !== undefined) {
            queryParameters['type'] = type;
        }

        if (usePopup !== undefined) {
            queryParameters['usePopup'] = usePopup;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ConnectorInstruction;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Delete stored connection info
     * The disconnect method deletes any stored tokens or connection information from the connectors database.
     * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
     */
    public v1ConnectorsConnectorDisconnectGet (connector: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/connectors/{connector}/disconnect'
            .replace('{' + 'connector' + '}', String(connector));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'connector' is not null or undefined
        if (connector === null || connector === undefined) {
            throw new Error('Required parameter connector was null or undefined when calling v1ConnectorsConnectorDisconnectGet.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get connector info for user
     * Returns information about the connector such as the connector id, whether or not is connected for this user (i.e. we have a token or credentials), and its update history for the user.
     * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1ConnectorsConnectorInfoGet (connector: string, accessToken?: string) : Promise<{ response: http.ClientResponse; body: ConnectorInfo;  }> {
        const localVarPath = this.basePath + '/v1/connectors/{connector}/info'
            .replace('{' + 'connector' + '}', String(connector));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'connector' is not null or undefined
        if (connector === null || connector === undefined) {
            throw new Error('Required parameter connector was null or undefined when calling v1ConnectorsConnectorInfoGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ConnectorInfo;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Sync with data source
     * The update method tells the QM Connector Framework to check with the data provider (such as Fitbit or MyFitnessPal) and retrieve any new measurements available.
     * @param connector Lowercase system name of the source application or device
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1ConnectorsConnectorUpdateGet (connector: string, accessToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/connectors/{connector}/update'
            .replace('{' + 'connector' + '}', String(connector));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'connector' is not null or undefined
        if (connector === null || connector === undefined) {
            throw new Error('Required parameter connector was null or undefined when calling v1ConnectorsConnectorUpdateGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * List of Connectors
     * A connector pulls data from other data providers using their API or a screenscraper. Returns a list of all available connectors and information about them such as their id, name, whether the user has provided access, logo url, connection instructions, and the update history.
     */
    public v1ConnectorsListGet () : Promise<{ response: http.ClientResponse; body: Array<Connector>;  }> {
        const localVarPath = this.basePath + '/v1/connectors/list';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Connector>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum CorrelationsApiApiKeys {
    internalApiKey,
}

export class CorrelationsApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: CorrelationsApiApiKeys, value: string) {
        this.authentications[CorrelationsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get aggregated correlations
     * Get correlations based on the anonymized aggregate data from all QuantiModo users.
     * @param accessToken User&#39;s OAuth2 access token
     * @param effect ORIGINAL variable name of the effect variable for which the user desires correlations
     * @param cause ORIGINAL variable name of the cause variable for which the user desires correlations
     * @param correlationCoefficient Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
     * @param onsetDelay The number of seconds which pass following a cause measurement before an effect would likely be observed.
     * @param durationOfAction The time in seconds over which the cause would be expected to exert a measurable effect. We have selected a default value for each variable. This default value may be replaced by a user specified by adjusting their variable user settings.
     * @param lastUpdated The time that this measurement was last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
     */
    public v1AggregatedCorrelationsGet (accessToken?: string, effect?: string, cause?: string, correlationCoefficient?: string, onsetDelay?: string, durationOfAction?: string, lastUpdated?: string, limit?: number, offset?: number, sort?: number) : Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }> {
        const localVarPath = this.basePath + '/v1/aggregatedCorrelations';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (effect !== undefined) {
            queryParameters['effect'] = effect;
        }

        if (cause !== undefined) {
            queryParameters['cause'] = cause;
        }

        if (correlationCoefficient !== undefined) {
            queryParameters['correlationCoefficient'] = correlationCoefficient;
        }

        if (onsetDelay !== undefined) {
            queryParameters['onsetDelay'] = onsetDelay;
        }

        if (durationOfAction !== undefined) {
            queryParameters['durationOfAction'] = durationOfAction;
        }

        if (lastUpdated !== undefined) {
            queryParameters['lastUpdated'] = lastUpdated;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Store or Update a Correlation
     * Add correlation
     * @param body Provides correlation data
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1AggregatedCorrelationsPost (body: PostCorrelation, accessToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/aggregatedCorrelations';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1AggregatedCorrelationsPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get correlations
     * Get correlations.&lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;correlationCoefficient&lt;/b&gt; - Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action&lt;/li&gt;&lt;li&gt;&lt;b&gt;onsetDelay&lt;/b&gt; - The number of seconds which pass following a cause measurement before an effect would likely be observed.&lt;/li&gt;&lt;li&gt;&lt;b&gt;durationOfAction&lt;/b&gt; - The time in seconds over which the cause would be expected to exert a measurable effect. We have selected a default value for each variable. This default value may be replaced by a user specified by adjusting their variable user settings.&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastUpdated&lt;/b&gt; - The time that this measurement was last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
     * @param accessToken User&#39;s OAuth2 access token
     * @param effect ORIGINAL variable name of the effect variable for which the user desires correlations
     * @param cause ORIGINAL variable name of the cause variable for which the user desires correlations
     * @param correlationCoefficient Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
     * @param onsetDelay The number of seconds which pass following a cause measurement before an effect would likely be observed.
     * @param durationOfAction The time in seconds over which the cause would be expected to exert a measurable effect. We have selected a default value for each variable. This default value may be replaced by a user specified by adjusting their variable user settings.
     * @param lastUpdated The time that this measurement was last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
     */
    public v1CorrelationsGet (accessToken?: string, effect?: string, cause?: string, correlationCoefficient?: string, onsetDelay?: string, durationOfAction?: string, lastUpdated?: string, limit?: number, offset?: number, sort?: number) : Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }> {
        const localVarPath = this.basePath + '/v1/correlations';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (effect !== undefined) {
            queryParameters['effect'] = effect;
        }

        if (cause !== undefined) {
            queryParameters['cause'] = cause;
        }

        if (correlationCoefficient !== undefined) {
            queryParameters['correlationCoefficient'] = correlationCoefficient;
        }

        if (onsetDelay !== undefined) {
            queryParameters['onsetDelay'] = onsetDelay;
        }

        if (durationOfAction !== undefined) {
            queryParameters['durationOfAction'] = durationOfAction;
        }

        if (lastUpdated !== undefined) {
            queryParameters['lastUpdated'] = lastUpdated;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Search user correlations for a given cause
     * Returns average of all correlations and votes for all user cause variables for a given cause. If parameter \&quot;include_public\&quot; is used, it also returns public correlations. User correlation overwrites or supersedes public correlation.
     * @param organizationId Organization ID
     * @param userId User id
     * @param variableName Effect variable name
     * @param organizationToken Organization access token
     * @param accessToken User&#39;s OAuth2 access token
     * @param includePublic Include public correlations, Can be \&quot;1\&quot; or empty.
     */
    public v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet (organizationId: number, userId: number, variableName: string, organizationToken: string, accessToken?: string, includePublic?: string) : Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }> {
        const localVarPath = this.basePath + '/v1/organizations/{organizationId}/users/{userId}/variables/{variableName}/causes'
            .replace('{' + 'organizationId' + '}', String(organizationId))
            .replace('{' + 'userId' + '}', String(userId))
            .replace('{' + 'variableName' + '}', String(variableName));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet.');
        }

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet.');
        }

        // verify required parameter 'variableName' is not null or undefined
        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet.');
        }

        // verify required parameter 'organizationToken' is not null or undefined
        if (organizationToken === null || organizationToken === undefined) {
            throw new Error('Required parameter organizationToken was null or undefined when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (organizationToken !== undefined) {
            queryParameters['organization_token'] = organizationToken;
        }

        if (includePublic !== undefined) {
            queryParameters['includePublic'] = includePublic;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Search user correlations for a given cause
     * Returns average of all correlations and votes for all user cause variables for a given effect. If parameter \&quot;include_public\&quot; is used, it also returns public correlations. User correlation overwrites or supersedes public correlation.
     * @param organizationId Organization ID
     * @param userId User id
     * @param variableName Cause variable name
     * @param organizationToken Organization access token
     * @param accessToken User&#39;s OAuth2 access token
     * @param includePublic Include public correlations, Can be \&quot;1\&quot; or empty.
     */
    public v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet (organizationId: number, userId: number, variableName: string, organizationToken: string, accessToken?: string, includePublic?: string) : Promise<{ response: http.ClientResponse; body: Array<CommonResponse>;  }> {
        const localVarPath = this.basePath + '/v1/organizations/{organizationId}/users/{userId}/variables/{variableName}/effects'
            .replace('{' + 'organizationId' + '}', String(organizationId))
            .replace('{' + 'userId' + '}', String(userId))
            .replace('{' + 'variableName' + '}', String(variableName));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet.');
        }

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet.');
        }

        // verify required parameter 'variableName' is not null or undefined
        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet.');
        }

        // verify required parameter 'organizationToken' is not null or undefined
        if (organizationToken === null || organizationToken === undefined) {
            throw new Error('Required parameter organizationToken was null or undefined when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (organizationToken !== undefined) {
            queryParameters['organization_token'] = organizationToken;
        }

        if (includePublic !== undefined) {
            queryParameters['include_public'] = includePublic;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<CommonResponse>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get average correlations for variables containing search term
     * Returns the average correlations from all users for all public variables that contain the characters in the search query. Returns average of all users public variable correlations with a specified cause or effect.
     * @param search Name of the variable that you want to know the causes or effects of.
     * @param effectOrCause Setting this to effect indicates that the searched variable is the effect and that the causes of this variable should be returned.  cause indicates that the searched variable is the cause and the effects should be returned.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1PublicCorrelationsSearchSearchGet (search: string, effectOrCause: string, accessToken?: string) : Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }> {
        const localVarPath = this.basePath + '/v1/public/correlations/search/{search}'
            .replace('{' + 'search' + '}', String(search));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'search' is not null or undefined
        if (search === null || search === undefined) {
            throw new Error('Required parameter search was null or undefined when calling v1PublicCorrelationsSearchSearchGet.');
        }

        // verify required parameter 'effectOrCause' is not null or undefined
        if (effectOrCause === null || effectOrCause === undefined) {
            throw new Error('Required parameter effectOrCause was null or undefined when calling v1PublicCorrelationsSearchSearchGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (effectOrCause !== undefined) {
            queryParameters['effectOrCause'] = effectOrCause;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Search user correlations for a given effect
     * Returns average of all correlations and votes for all user cause variables for a given effect
     * @param variableName Effect variable name
     */
    public v1VariablesVariableNameCausesGet (variableName: string) : Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }> {
        const localVarPath = this.basePath + '/v1/variables/{variableName}/causes'
            .replace('{' + 'variableName' + '}', String(variableName));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'variableName' is not null or undefined
        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling v1VariablesVariableNameCausesGet.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Search user correlations for a given cause
     * Returns average of all correlations and votes for all user effect variables for a given cause
     * @param variableName Cause variable name
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VariablesVariableNameEffectsGet (variableName: string, accessToken?: string) : Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }> {
        const localVarPath = this.basePath + '/v1/variables/{variableName}/effects'
            .replace('{' + 'variableName' + '}', String(variableName));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'variableName' is not null or undefined
        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling v1VariablesVariableNameEffectsGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Search public correlations for a given effect
     * Returns average of all correlations and votes for all public cause variables for a given effect
     * @param variableName Effect variable name
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VariablesVariableNamePublicCausesGet (variableName: string, accessToken?: string) : Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }> {
        const localVarPath = this.basePath + '/v1/variables/{variableName}/public/causes'
            .replace('{' + 'variableName' + '}', String(variableName));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'variableName' is not null or undefined
        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling v1VariablesVariableNamePublicCausesGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Search public correlations for a given cause
     * Returns average of all correlations and votes for all public cause variables for a given cause
     * @param variableName Cause variable name
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VariablesVariableNamePublicEffectsGet (variableName: string, accessToken?: string) : Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }> {
        const localVarPath = this.basePath + '/v1/variables/{variableName}/public/effects'
            .replace('{' + 'variableName' + '}', String(variableName));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'variableName' is not null or undefined
        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling v1VariablesVariableNamePublicEffectsGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Correlation>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Delete vote
     * Delete previously posted vote
     * @param body The cause and effect variable names for the predictor vote to be deleted.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VotesDeletePost (body: VoteDelete, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/votes/delete';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1VotesDeletePost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Post or update vote
     * This is to enable users to indicate their opinion on the plausibility of a causal relationship between a treatment and outcome. QuantiModo incorporates crowd-sourced plausibility estimations into their algorithm. This is done allowing user to indicate their view of the plausibility of each relationship with thumbs up/down buttons placed next to each prediction.
     * @param body Contains the cause variable, effect variable, and vote value.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VotesPost (body: PostVote, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/votes';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1VotesPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum MeasurementsApiApiKeys {
    internalApiKey,
}

export class MeasurementsApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: MeasurementsApiApiKeys, value: string) {
        this.authentications[MeasurementsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get measurement sources
     * Returns a list of all the apps from which measurement data is obtained.
     */
    public v1MeasurementSourcesGet () : Promise<{ response: http.ClientResponse; body: MeasurementSource;  }> {
        const localVarPath = this.basePath + '/v1/measurementSources';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: MeasurementSource;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Add a data source
     * Add a life-tracking app or device to the QuantiModo list of data sources.
     * @param body An array of names of data sources you want to add.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1MeasurementSourcesPost (body: MeasurementSource, accessToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/measurementSources';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1MeasurementSourcesPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get daily measurements for this user
     * Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten. &lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;value&lt;/b&gt; - Value of measurement&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastUpdated&lt;/b&gt; - The time that this measurement was created or last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
     * @param variableName Name of the variable you want measurements for
     * @param accessToken User&#39;s OAuth2 access token
     * @param abbreviatedUnitName The unit your want the measurements in
     * @param startTime The lower limit of measurements returned (Iso8601)
     * @param endTime The upper limit of measurements returned (Iso8601)
     * @param groupingWidth The time (in seconds) over which measurements are grouped together
     * @param groupingTimezone The time (in seconds) over which measurements are grouped together
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
     */
    public v1MeasurementsDailyGet (variableName: string, accessToken?: string, abbreviatedUnitName?: string, startTime?: string, endTime?: string, groupingWidth?: number, groupingTimezone?: string, limit?: number, offset?: number, sort?: number) : Promise<{ response: http.ClientResponse; body: Measurement;  }> {
        const localVarPath = this.basePath + '/v1/measurements/daily';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'variableName' is not null or undefined
        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling v1MeasurementsDailyGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (variableName !== undefined) {
            queryParameters['variableName'] = variableName;
        }

        if (abbreviatedUnitName !== undefined) {
            queryParameters['abbreviatedUnitName'] = abbreviatedUnitName;
        }

        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }

        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }

        if (groupingWidth !== undefined) {
            queryParameters['groupingWidth'] = groupingWidth;
        }

        if (groupingTimezone !== undefined) {
            queryParameters['groupingTimezone'] = groupingTimezone;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Measurement;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Delete a measurement
     * Delete a previously submitted measurement
     * @param body The startTime and variableId of the measurement to be deleted.
     */
    public v1MeasurementsDeletePost (body: MeasurementDelete) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/measurements/delete';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1MeasurementsDeletePost.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get measurements for this user
     * Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten. &lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;value&lt;/b&gt; - Value of measurement&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastUpdated&lt;/b&gt; - The time that this measurement was created or last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
     * @param accessToken User&#39;s OAuth2 access token
     * @param variableName Name of the variable you want measurements for
     * @param variableCategoryName Name of the variable category you want measurements for
     * @param source Name of the source you want measurements for (supports exact name match only)
     * @param value Value of measurement
     * @param lastUpdated The time that this measurement was created or last updated in the format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
     * @param unit The unit you want the measurements returned in
     * @param startTime The lower limit of measurements returned (Epoch)
     * @param createdAt The time the measurement record was first created in the format YYYY-MM-DDThh:mm:ss. Time zone should be UTC and not local.
     * @param updatedAt The time the measurement record was last changed in the format YYYY-MM-DDThh:mm:ss. Time zone should be UTC and not local.
     * @param endTime The upper limit of measurements returned (Epoch)
     * @param groupingWidth The time (in seconds) over which measurements are grouped together
     * @param groupingTimezone The time (in seconds) over which measurements are grouped together
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
     */
    public v1MeasurementsGet (accessToken?: string, variableName?: string, variableCategoryName?: string, source?: string, value?: string, lastUpdated?: string, unit?: string, startTime?: string, createdAt?: string, updatedAt?: string, endTime?: string, groupingWidth?: number, groupingTimezone?: string, limit?: number, offset?: number, sort?: number) : Promise<{ response: http.ClientResponse; body: Measurement;  }> {
        const localVarPath = this.basePath + '/v1/measurements';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (variableName !== undefined) {
            queryParameters['variableName'] = variableName;
        }

        if (variableCategoryName !== undefined) {
            queryParameters['variableCategoryName'] = variableCategoryName;
        }

        if (source !== undefined) {
            queryParameters['source'] = source;
        }

        if (value !== undefined) {
            queryParameters['value'] = value;
        }

        if (lastUpdated !== undefined) {
            queryParameters['lastUpdated'] = lastUpdated;
        }

        if (unit !== undefined) {
            queryParameters['unit'] = unit;
        }

        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }

        if (createdAt !== undefined) {
            queryParameters['createdAt'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updatedAt'] = updatedAt;
        }

        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }

        if (groupingWidth !== undefined) {
            queryParameters['groupingWidth'] = groupingWidth;
        }

        if (groupingTimezone !== undefined) {
            queryParameters['groupingTimezone'] = groupingTimezone;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Measurement;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Post a new set or update existing measurements to the database
     * You can submit or update multiple measurements in a \&quot;measurements\&quot; sub-array.  If the variable these measurements correspond to does not already exist in the database, it will be automatically added.  The request body should look something like [{\&quot;measurements\&quot;:[{\&quot;startTime\&quot;:1439389320,\&quot;value\&quot;:\&quot;3\&quot;}, {\&quot;startTime\&quot;:1439389319,\&quot;value\&quot;:\&quot;2\&quot;}],\&quot;name\&quot;:\&quot;Acne (out of 5)\&quot;,\&quot;source\&quot;:\&quot;QuantiModo\&quot;,\&quot;category\&quot;:\&quot;Symptoms\&quot;,\&quot;combinationOperation\&quot;:\&quot;MEAN\&quot;,\&quot;unit\&quot;:\&quot;/5\&quot;}]
     * @param body An array of measurements you want to insert.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1MeasurementsPost (body: MeasurementSet, accessToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/measurements';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1MeasurementsPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get measurements range for this user
     * Get Unix time-stamp (epoch time) of the user&#39;s first and last measurements taken.
     * @param sources Enter source name to limit to specific source (varchar)
     * @param user If not specified, uses currently logged in user (bigint)
     */
    public v1MeasurementsRangeGet (sources?: string, user?: number) : Promise<{ response: http.ClientResponse; body: MeasurementRange;  }> {
        const localVarPath = this.basePath + '/v1/measurementsRange';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (sources !== undefined) {
            queryParameters['sources'] = sources;
        }

        if (user !== undefined) {
            queryParameters['user'] = user;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: MeasurementRange;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get Measurements CSV
     * Download a CSV containing all user measurements
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v2MeasurementsCsvGet (accessToken?: string) : Promise<{ response: http.ClientResponse; body: any;  }> {
        const localVarPath = this.basePath + '/v2/measurements/csv';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Delete Measurement
     * Delete Measurement
     * @param id id of Measurement
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v2MeasurementsIdDelete (id: number, accessToken?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse20012;  }> {
        const localVarPath = this.basePath + '/v2/measurements/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MeasurementsIdDelete.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse20012;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get Measurement
     * Get Measurement
     * @param id id of Measurement
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v2MeasurementsIdGet (id: number, accessToken?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse20011;  }> {
        const localVarPath = this.basePath + '/v2/measurements/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MeasurementsIdGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse20011;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Update Measurement
     * Update Measurement
     * @param id id of Measurement
     * @param accessToken User&#39;s OAuth2 access token
     * @param body Measurement that should be updated
     */
    public v2MeasurementsIdPut (id: number, accessToken?: string, body?: Measurement) : Promise<{ response: http.ClientResponse; body: InlineResponse20012;  }> {
        const localVarPath = this.basePath + '/v2/measurements/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MeasurementsIdPut.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse20012;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Post Request for Measurements CSV
     * Use this endpoint to schedule a CSV export containing all user measurements to be emailed to the user within 24 hours.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v2MeasurementsRequestCsvPost (accessToken?: string) : Promise<{ response: http.ClientResponse; body: number;  }> {
        const localVarPath = this.basePath + '/v2/measurements/request_csv';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: number;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Post Request for Measurements PDF
     * Use this endpoint to schedule a PDF export containing all user measurements to be emailed to the user within 24 hours.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v2MeasurementsRequestPdfPost (accessToken?: string) : Promise<{ response: http.ClientResponse; body: number;  }> {
        const localVarPath = this.basePath + '/v2/measurements/request_pdf';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: number;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Post Request for Measurements XLS
     * Use this endpoint to schedule a XLS export containing all user measurements to be emailed to the user within 24 hours.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v2MeasurementsRequestXlsPost (accessToken?: string) : Promise<{ response: http.ClientResponse; body: number;  }> {
        const localVarPath = this.basePath + '/v2/measurements/request_xls';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: number;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum OrganizationsApiApiKeys {
    internalApiKey,
}

export class OrganizationsApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: OrganizationsApiApiKeys, value: string) {
        this.authentications[OrganizationsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get user tokens for existing users, create new users
     * Get user tokens for existing users, create new users
     * @param organizationId Organization ID
     * @param body Provides organization token and user ID
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1OrganizationsOrganizationIdUsersPost (organizationId: number, body: UserTokenRequest, accessToken?: string) : Promise<{ response: http.ClientResponse; body: UserTokenSuccessfulResponse;  }> {
        const localVarPath = this.basePath + '/v1/organizations/{organizationId}/users'
            .replace('{' + 'organizationId' + '}', String(organizationId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling v1OrganizationsOrganizationIdUsersPost.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1OrganizationsOrganizationIdUsersPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: UserTokenSuccessfulResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum PairsApiApiKeys {
    internalApiKey,
}

export class PairsApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: PairsApiApiKeys, value: string) {
        this.authentications[PairsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get pairs
     * Pairs cause measurements with effect measurements grouped over the duration of action after the onset delay.
     * @param cause Original variable name for the explanatory or independent variable
     * @param effect Original variable name for the outcome or dependent variable
     * @param accessToken User&#39;s OAuth2 access token
     * @param causeSource Name of data source that the cause measurements should come from
     * @param causeUnit Abbreviated name for the unit cause measurements to be returned in
     * @param delay Delay before onset of action (in seconds) from the cause variable settings.
     * @param duration Duration of action (in seconds) from the cause variable settings.
     * @param effectSource Name of data source that the effectmeasurements should come from
     * @param effectUnit Abbreviated name for the unit effect measurements to be returned in
     * @param endTime The most recent date (in epoch time) for which we should return measurements
     * @param startTime The earliest date (in epoch time) for which we should return measurements
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
     */
    public v1PairsCsvGet (cause: string, effect: string, accessToken?: string, causeSource?: string, causeUnit?: string, delay?: string, duration?: string, effectSource?: string, effectUnit?: string, endTime?: string, startTime?: string, limit?: number, offset?: number, sort?: number) : Promise<{ response: http.ClientResponse; body: Array<Pairs>;  }> {
        const localVarPath = this.basePath + '/v1/pairsCsv';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'cause' is not null or undefined
        if (cause === null || cause === undefined) {
            throw new Error('Required parameter cause was null or undefined when calling v1PairsCsvGet.');
        }

        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('Required parameter effect was null or undefined when calling v1PairsCsvGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (cause !== undefined) {
            queryParameters['cause'] = cause;
        }

        if (causeSource !== undefined) {
            queryParameters['causeSource'] = causeSource;
        }

        if (causeUnit !== undefined) {
            queryParameters['causeUnit'] = causeUnit;
        }

        if (delay !== undefined) {
            queryParameters['delay'] = delay;
        }

        if (duration !== undefined) {
            queryParameters['duration'] = duration;
        }

        if (effect !== undefined) {
            queryParameters['effect'] = effect;
        }

        if (effectSource !== undefined) {
            queryParameters['effectSource'] = effectSource;
        }

        if (effectUnit !== undefined) {
            queryParameters['effectUnit'] = effectUnit;
        }

        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }

        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Pairs>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get pairs
     * Pairs cause measurements with effect measurements grouped over the duration of action after the onset delay.
     * @param cause Original variable name for the explanatory or independent variable
     * @param effect Original variable name for the outcome or dependent variable
     * @param accessToken User&#39;s OAuth2 access token
     * @param causeSource Name of data source that the cause measurements should come from
     * @param causeUnit Abbreviated name for the unit cause measurements to be returned in
     * @param delay Delay before onset of action (in seconds) from the cause variable settings.
     * @param duration Duration of action (in seconds) from the cause variable settings.
     * @param effectSource Name of data source that the effectmeasurements should come from
     * @param effectUnit Abbreviated name for the unit effect measurements to be returned in
     * @param endTime The most recent date (in epoch time) for which we should return measurements
     * @param startTime The earliest date (in epoch time) for which we should return measurements
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
     */
    public v1PairsGet (cause: string, effect: string, accessToken?: string, causeSource?: string, causeUnit?: string, delay?: string, duration?: string, effectSource?: string, effectUnit?: string, endTime?: string, startTime?: string, limit?: number, offset?: number, sort?: number) : Promise<{ response: http.ClientResponse; body: Array<Pairs>;  }> {
        const localVarPath = this.basePath + '/v1/pairs';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'cause' is not null or undefined
        if (cause === null || cause === undefined) {
            throw new Error('Required parameter cause was null or undefined when calling v1PairsGet.');
        }

        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('Required parameter effect was null or undefined when calling v1PairsGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (cause !== undefined) {
            queryParameters['cause'] = cause;
        }

        if (causeSource !== undefined) {
            queryParameters['causeSource'] = causeSource;
        }

        if (causeUnit !== undefined) {
            queryParameters['causeUnit'] = causeUnit;
        }

        if (delay !== undefined) {
            queryParameters['delay'] = delay;
        }

        if (duration !== undefined) {
            queryParameters['duration'] = duration;
        }

        if (effect !== undefined) {
            queryParameters['effect'] = effect;
        }

        if (effectSource !== undefined) {
            queryParameters['effectSource'] = effectSource;
        }

        if (effectUnit !== undefined) {
            queryParameters['effectUnit'] = effectUnit;
        }

        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }

        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Pairs>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum RemindersApiApiKeys {
    internalApiKey,
}

export class RemindersApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: RemindersApiApiKeys, value: string) {
        this.authentications[RemindersApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get specific pending tracking reminders
     * Specfic pending reminder instances that still need to be tracked.  
     * @param accessToken User&#39;s OAuth2 access token
     * @param variableCategoryName Limit tracking reminder notifications to a specific variable category
     * @param createdAt When the record was first created. Use ISO 8601 datetime format. Time zone should be UTC and not local. 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format. Time zone should be UTC and not local. 
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v1TrackingReminderNotificationsGet (accessToken?: string, variableCategoryName?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse200;  }> {
        const localVarPath = this.basePath + '/v1/trackingReminderNotifications';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (variableCategoryName !== undefined) {
            queryParameters['variableCategoryName'] = variableCategoryName;
        }

        if (createdAt !== undefined) {
            queryParameters['createdAt'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updatedAt'] = updatedAt;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse200;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Skip a pending tracking reminder
     * Deletes the pending tracking reminder
     * @param body Id of the pending reminder to be skipped or deleted
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1TrackingReminderNotificationsSkipPost (body: TrackingReminderNotificationSkip, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/trackingReminderNotifications/skip';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1TrackingReminderNotificationsSkipPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Snooze a pending tracking reminder
     * Changes the reminder time to now plus one hour
     * @param body Id of the pending reminder to be snoozed
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1TrackingReminderNotificationsSnoozePost (body: TrackingReminderNotificationSnooze, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/trackingReminderNotifications/snooze';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1TrackingReminderNotificationsSnoozePost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Track a pending tracking reminder
     * Adds the default measurement for the pending tracking reminder with the reminder time as the measurment start time
     * @param body Id of the pending reminder to be tracked
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1TrackingReminderNotificationsTrackPost (body: TrackingReminderNotificationTrack, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/trackingReminderNotifications/track';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1TrackingReminderNotificationsTrackPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Delete tracking reminder
     * Delete previously created tracking reminder
     * @param body Id of reminder to be deleted
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1TrackingRemindersDeletePost (body: TrackingReminderDelete, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/trackingReminders/delete';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1TrackingRemindersDeletePost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get repeating tracking reminder settings
     * Users can be reminded to track certain variables at a specified frequency with a default value.  
     * @param accessToken User&#39;s OAuth2 access token
     * @param variableCategoryName Limit tracking reminders to a specific variable category
     * @param createdAt When the record was first created. Use ISO 8601 datetime format. Time zone should be UTC and not local. 
     * @param updatedAt When the record was last updated. Use ISO 8601 datetime format. Time zone should be UTC and not local. 
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v1TrackingRemindersGet (accessToken?: string, variableCategoryName?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }> {
        const localVarPath = this.basePath + '/v1/trackingReminders';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (variableCategoryName !== undefined) {
            queryParameters['variableCategoryName'] = variableCategoryName;
        }

        if (createdAt !== undefined) {
            queryParameters['createdAt'] = createdAt;
        }

        if (updatedAt !== undefined) {
            queryParameters['updatedAt'] = updatedAt;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Store a Tracking Reminder
     * This is to enable users to create reminders to track a variable with a default value at a specified frequency
     * @param accessToken User&#39;s OAuth2 access token
     * @param body TrackingReminder that should be stored
     */
    public v1TrackingRemindersPost (accessToken?: string, body?: TrackingReminder) : Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }> {
        const localVarPath = this.basePath + '/v1/trackingReminders';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.quantimodo_oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TagsApiApiKeys {
    internalApiKey,
}

export class TagsApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: TagsApiApiKeys, value: string) {
        this.authentications[TagsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Delete user tag or ingredient
     * Delete previously created user tags or ingredients.
     * @param taggedVariableId This is the id of the variable being tagged with an ingredient or something.
     * @param tagVariableId This is the id of the ingredient variable whose value is determined based on the value of the tagged variable.
     */
    public v1UserTagsDeletePost (taggedVariableId: number, tagVariableId: number) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/userTags/delete';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'taggedVariableId' is not null or undefined
        if (taggedVariableId === null || taggedVariableId === undefined) {
            throw new Error('Required parameter taggedVariableId was null or undefined when calling v1UserTagsDeletePost.');
        }

        // verify required parameter 'tagVariableId' is not null or undefined
        if (tagVariableId === null || tagVariableId === undefined) {
            throw new Error('Required parameter tagVariableId was null or undefined when calling v1UserTagsDeletePost.');
        }

        if (taggedVariableId !== undefined) {
            queryParameters['taggedVariableId'] = taggedVariableId;
        }

        if (tagVariableId !== undefined) {
            queryParameters['tagVariableId'] = tagVariableId;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Post or update user tags or ingredients
     * This endpoint allows users to tag foods with their ingredients.  This information will then be used to infer the user intake of the different ingredients by just entering the foods. The inferred intake levels will then be used to determine the effects of different nutrients on the user during analysis.
     * @param body Contains the new user tag data
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1UserTagsPost (body: UserTag, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/userTags';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1UserTagsPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum UnitsApiApiKeys {
    internalApiKey,
}

export class UnitsApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: UnitsApiApiKeys, value: string) {
        this.authentications[UnitsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get unit categories
     * Get a list of the categories of measurement units such as &#39;Distance&#39;, &#39;Duration&#39;, &#39;Energy&#39;, &#39;Frequency&#39;, &#39;Miscellany&#39;, &#39;Pressure&#39;, &#39;Proportion&#39;, &#39;Rating&#39;, &#39;Temperature&#39;, &#39;Volume&#39;, and &#39;Weight&#39;.
     */
    public v1UnitCategoriesGet () : Promise<{ response: http.ClientResponse; body: UnitCategory;  }> {
        const localVarPath = this.basePath + '/v1/unitCategories';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: UnitCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get all available units
     * Get all available units
     * @param accessToken User&#39;s OAuth2 access token
     * @param id Unit id
     * @param unitName Unit name
     * @param abbreviatedUnitName Restrict the results to a specific unit by providing the unit abbreviation.
     * @param categoryName Restrict the results to a specific unit category by providing the unit category name.
     */
    public v1UnitsGet (accessToken?: string, id?: number, unitName?: string, abbreviatedUnitName?: string, categoryName?: string) : Promise<{ response: http.ClientResponse; body: Array<Unit>;  }> {
        const localVarPath = this.basePath + '/v1/units';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (unitName !== undefined) {
            queryParameters['unitName'] = unitName;
        }

        if (abbreviatedUnitName !== undefined) {
            queryParameters['abbreviatedUnitName'] = abbreviatedUnitName;
        }

        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Unit>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Units for Variable
     * Get a list of all possible units to use for a given variable
     * @param accessToken User&#39;s OAuth2 access token
     * @param unitName Name of Unit you want to retrieve
     * @param abbreviatedUnitName Abbreviated Unit Name of the unit you want
     * @param categoryName Name of the category you want units for
     * @param variable Name of the variable you want units for
     */
    public v1UnitsVariableGet (accessToken?: string, unitName?: string, abbreviatedUnitName?: string, categoryName?: string, variable?: string) : Promise<{ response: http.ClientResponse; body: Array<Unit>;  }> {
        const localVarPath = this.basePath + '/v1/unitsVariable';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (unitName !== undefined) {
            queryParameters['unitName'] = unitName;
        }

        if (abbreviatedUnitName !== undefined) {
            queryParameters['abbreviatedUnitName'] = abbreviatedUnitName;
        }

        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }

        if (variable !== undefined) {
            queryParameters['variable'] = variable;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Unit>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum UserApiApiKeys {
    internalApiKey,
}

export class UserApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: UserApiApiKeys, value: string) {
        this.authentications[UserApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get user tokens for existing users, create new users
     * Get user tokens for existing users, create new users
     * @param organizationId Organization ID
     * @param body Provides organization token and user ID
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1OrganizationsOrganizationIdUsersPost (organizationId: number, body: UserTokenRequest, accessToken?: string) : Promise<{ response: http.ClientResponse; body: UserTokenSuccessfulResponse;  }> {
        const localVarPath = this.basePath + '/v1/organizations/{organizationId}/users'
            .replace('{' + 'organizationId' + '}', String(organizationId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling v1OrganizationsOrganizationIdUsersPost.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1OrganizationsOrganizationIdUsersPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.internalApiKey.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: UserTokenSuccessfulResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get all available units for variableGet authenticated user
     * Returns user info for the currently authenticated user.
     */
    public v1UserMeGet () : Promise<{ response: http.ClientResponse; body: User;  }> {
        const localVarPath = this.basePath + '/v1/user/me';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: User;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum VariablesApiApiKeys {
    internalApiKey,
}

export class VariablesApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: VariablesApiApiKeys, value: string) {
        this.authentications[VariablesApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Get public variables
     * This endpoint retrieves an array of all public variables. Public variables are things like foods, medications, symptoms, conditions, and anything not unique to a particular user. For instance, a telephone number or name would not be a public variable.
     */
    public v1PublicVariablesGet () : Promise<{ response: http.ClientResponse; body: Variable;  }> {
        const localVarPath = this.basePath + '/v1/public/variables';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Variable;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get top 5 PUBLIC variables with the most correlations
     * Get top 5 PUBLIC variables with the most correlations containing the entered search characters. For example, search for &#39;mood&#39; as an effect. Since &#39;Overall Mood&#39; has a lot of correlations with other variables, it should be in the autocomplete list.&lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;category&lt;/b&gt; - Category of Variable&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
     * @param search Search query can be some fraction of a variable name.
     * @param accessToken User&#39;s OAuth2 access token
     * @param categoryName Filter variables by category name. The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
     * @param source Specify a data source name to only return variables from a specific data source.
     * @param effectOrCause Indicate if you only want variables that have user correlations.  Possible values are effect and cause.
     * @param publicEffectOrCause Indicate if you only want variables that have aggregated correlations.  Possible values are effect and cause.
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
     */
    public v1PublicVariablesSearchSearchGet (search: string, accessToken?: string, categoryName?: string, source?: string, effectOrCause?: string, publicEffectOrCause?: string, limit?: number, offset?: number, sort?: number) : Promise<{ response: http.ClientResponse; body: Variable;  }> {
        const localVarPath = this.basePath + '/v1/public/variables/search/{search}'
            .replace('{' + 'search' + '}', String(search));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'search' is not null or undefined
        if (search === null || search === undefined) {
            throw new Error('Required parameter search was null or undefined when calling v1PublicVariablesSearchSearchGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }

        if (source !== undefined) {
            queryParameters['source'] = source;
        }

        if (effectOrCause !== undefined) {
            queryParameters['effectOrCause'] = effectOrCause;
        }

        if (publicEffectOrCause !== undefined) {
            queryParameters['publicEffectOrCause'] = publicEffectOrCause;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Variable;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Update User Settings for a Variable
     * Users can change the parameters used in analysis of that variable such as the expected duration of action for a variable to have an effect, the estimated delay before the onset of action. In order to filter out erroneous data, they are able to set the maximum and minimum reasonable daily values for a variable.
     * @param userVariables Variable user settings data
     */
    public v1UserVariablesPost (userVariables: UserVariables) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/userVariables';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'userVariables' is not null or undefined
        if (userVariables === null || userVariables === undefined) {
            throw new Error('Required parameter userVariables was null or undefined when calling v1UserVariablesPost.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: userVariables,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Variable categories
     * The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
     */
    public v1VariableCategoriesGet () : Promise<{ response: http.ClientResponse; body: Array<VariableCategory>;  }> {
        const localVarPath = this.basePath + '/v1/variableCategories';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<VariableCategory>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get variables by the category name
     * Get variables by the category name. &lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;name&lt;/b&gt; - Original name of the variable (supports exact name match only)&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastUpdated&lt;/b&gt; - Filter by the last time any of the properties of the variable were changed. Uses UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;li&gt;&lt;b&gt;source&lt;/b&gt; - The name of the data source that created the variable (supports exact name match only). So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here&lt;/li&gt;&lt;li&gt;&lt;b&gt;latestMeasurementTime&lt;/b&gt; - Filter variables based on the last time a measurement for them was created or updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;li&gt;&lt;b&gt;numberOfMeasurements&lt;/b&gt; - Filter variables by the total number of measurements that they have. This could be used of you want to filter or sort by popularity.&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastSource&lt;/b&gt; - Limit variables to those which measurements were last submitted by a specific source. So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here. (supports exact name match only)&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
     * @param accessToken User&#39;s OAuth2 access token
     * @param id Common variable id
     * @param userId User id
     * @param category Filter data by category
     * @param name Original name of the variable (supports exact name match only)
     * @param lastUpdated Filter by the last time any of the properties of the variable were changed. Uses UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
     * @param source The name of the data source that created the variable (supports exact name match only). So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here
     * @param latestMeasurementTime Filter variables based on the last time a measurement for them was created or updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
     * @param numberOfMeasurements Filter variables by the total number of measurements that they have. This could be used of you want to filter or sort by popularity.
     * @param lastSource Limit variables to those which measurements were last submitted by a specific source. So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here. (supports exact name match only)
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
     */
    public v1VariablesGet (accessToken?: string, id?: number, userId?: number, category?: string, name?: string, lastUpdated?: string, source?: string, latestMeasurementTime?: string, numberOfMeasurements?: string, lastSource?: string, limit?: number, offset?: number, sort?: number) : Promise<{ response: http.ClientResponse; body: Variable;  }> {
        const localVarPath = this.basePath + '/v1/variables';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (userId !== undefined) {
            queryParameters['userId'] = userId;
        }

        if (category !== undefined) {
            queryParameters['category'] = category;
        }

        if (name !== undefined) {
            queryParameters['name'] = name;
        }

        if (lastUpdated !== undefined) {
            queryParameters['lastUpdated'] = lastUpdated;
        }

        if (source !== undefined) {
            queryParameters['source'] = source;
        }

        if (latestMeasurementTime !== undefined) {
            queryParameters['latestMeasurementTime'] = latestMeasurementTime;
        }

        if (numberOfMeasurements !== undefined) {
            queryParameters['numberOfMeasurements'] = numberOfMeasurements;
        }

        if (lastSource !== undefined) {
            queryParameters['lastSource'] = lastSource;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.basicAuth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Variable;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Create Variables
     * Allows the client to create a new variable in the &#x60;variables&#x60; table.
     * @param body Original name for the variable.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VariablesPost (body: VariablesNew, accessToken?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/variables';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1VariablesPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get variables by search query
     * Get variables containing the search characters for which the currently logged in user has measurements. Used to provide auto-complete function in variable search boxes.
     * @param search Search query which may be an entire variable name or a fragment of one.
     * @param accessToken User&#39;s OAuth2 access token
     * @param categoryName Filter variables by category name. The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
     * @param includePublic Set to true if you would like to include public variables when no user variables are found.
     * @param manualTracking Set to true if you would like to exlude variables like apps and website names.
     * @param source Specify a data source name to only return variables from a specific data source.
     * @param effectOrCause Indicate if you only want variables that have user correlations.  Possible values are effect and cause.
     * @param publicEffectOrCause Indicate if you only want variables that have aggregated correlations.  Possible values are effect and cause.
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
     * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
     */
    public v1VariablesSearchSearchGet (search: string, accessToken?: string, categoryName?: string, includePublic?: boolean, manualTracking?: boolean, source?: string, effectOrCause?: string, publicEffectOrCause?: string, limit?: number, offset?: number) : Promise<{ response: http.ClientResponse; body: Array<Variable>;  }> {
        const localVarPath = this.basePath + '/v1/variables/search/{search}'
            .replace('{' + 'search' + '}', String(search));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'search' is not null or undefined
        if (search === null || search === undefined) {
            throw new Error('Required parameter search was null or undefined when calling v1VariablesSearchSearchGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }

        if (includePublic !== undefined) {
            queryParameters['includePublic'] = includePublic;
        }

        if (manualTracking !== undefined) {
            queryParameters['manualTracking'] = manualTracking;
        }

        if (source !== undefined) {
            queryParameters['source'] = source;
        }

        if (effectOrCause !== undefined) {
            queryParameters['effectOrCause'] = effectOrCause;
        }

        if (publicEffectOrCause !== undefined) {
            queryParameters['publicEffectOrCause'] = publicEffectOrCause;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Variable>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get info about a variable
     * Get all of the settings and information about a variable by its name. If the logged in user has modified the settings for the variable, these will be provided instead of the default settings for that variable.
     * @param variableName Variable name
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VariablesVariableNameGet (variableName: string, accessToken?: string) : Promise<{ response: http.ClientResponse; body: Variable;  }> {
        const localVarPath = this.basePath + '/v1/variables/{variableName}'
            .replace('{' + 'variableName' + '}', String(variableName));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'variableName' is not null or undefined
        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling v1VariablesVariableNameGet.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Variable;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum VotesApiApiKeys {
    internalApiKey,
}

export class VotesApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
        'quantimodo_oauth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
        'internalApiKey': new ApiKeyAuth('header', 'api_key'),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: VotesApiApiKeys, value: string) {
        this.authentications[VotesApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    set accessToken(token: string) {
        this.authentications.quantimodo_oauth2.accessToken = token;
    }
    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Delete vote
     * Delete previously posted vote
     * @param body The cause and effect variable names for the predictor vote to be deleted.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VotesDeletePost (body: VoteDelete, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/votes/delete';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1VotesDeletePost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Post or update vote
     * This is to enable users to indicate their opinion on the plausibility of a causal relationship between a treatment and outcome. QuantiModo incorporates crowd-sourced plausibility estimations into their algorithm. This is done allowing user to indicate their view of the plausibility of each relationship with thumbs up/down buttons placed next to each prediction.
     * @param body Contains the cause variable, effect variable, and vote value.
     * @param accessToken User&#39;s OAuth2 access token
     */
    public v1VotesPost (body: PostVote, accessToken?: string) : Promise<{ response: http.ClientResponse; body: CommonResponse;  }> {
        const localVarPath = this.basePath + '/v1/votes';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1VotesPost.');
        }

        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.oauth2.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: CommonResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
