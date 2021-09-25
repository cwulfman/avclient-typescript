/** StatusCode is an enum representing the various status codes
 * returned by the av client
 */

export enum StatusCode {
    VoterRecordNotFound = 'voter record not found',
    NetworkError = 'network code',
    CallOutOfOrderError = 'call out of order error',
    AccessCodeExpired = 'access code expired',
    AccessCodeInvalid = 'access code invalid',
    CorruptCVRError = 'corrupt CVR',
    ServerCommitmentError = 'server commitment error',
}
