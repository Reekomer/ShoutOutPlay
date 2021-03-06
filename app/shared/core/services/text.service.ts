export class TextService {
  
  public static SHOUTOUT_NOT_FOUND: string = `The ShoutOut recording file no longer exists. This can happen if the device settings have been reset or if the file had inadvertently been overwritten. Suggestion: remove the ShoutOut and record a new one.`;
  
  public static SPOTIFY_PLAY_DELAY_NOTICE: string = `It's taking a bit long to connect with the Spotify streaming music service. You may be experiencing some network interruptions. If you continue to receive this message, you may want to find a better network connection or try force quitting the app and relaunching.`;

  public static STREAM_DISCONNECT: string = `We're sorry but it appears we have lost a network connection.`;

  public static SPOTIFY_PREMIUM_MSG: string = 'We are so sorry! Music streaming on mobile requires a Spotify Premium account. You can check out more at http://spotify.com. Last time we checked it was $9.99/month with the first 30 days free.';

  public static SPOTIFY_SEARCH_DELAY_NOTICE: string = `We're sorry, this search is taking longer than expected. You may be experiencing network interruptions. However you may also need to re-login. If you continue to receive this message, please open the sidebar, choose Settings and Logout. Then simply re-login.`

  public static SPOTIFY_SHOUTOUT_READY(trackName: string, playlistName: string): string {
    return `Awesome! Your ShoutOut is now attached to '${trackName}'. You will find it in your playlist '${playlistName}', which can be accessed via your 'Playlists' in the sidebar.`;
  } 
}
