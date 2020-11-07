import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 48,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    padding: 10,
    justifyContent: 'flex-end',
  },

  bottomContainer: {

    padding: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'flex-end'

  },

  handle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },

  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songrow: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  songname: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },

  songImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'grey',
  },
  //  right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },

  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});

export default styles;