import {StyleSheet} from 'react-native';
import {afterPartyPink, black, mortarGrey, white} from '../../Theme/color';

export default StyleSheet.create({
  itemContainer: {
    backgroundColor: black,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: white,
    marginBottom: 20,
    padding: 13,
    shadowColor: '#BC61F5',
    marginHorizontal: 17,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 9,
    elevation: 5,
  },
  banner: {
    height: 331,
    width: '100%',
  },
  itemTitle: {fontWeight: '500', fontSize: 22, color: white},
  timeSlot: {
    fontWeight: '400',
    fontSize: 14,
    marginVertical: 9,
    color: white,
    opacity: 0.6,
  },
  tag: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: mortarGrey,
    marginRight: 6,
    marginTop: 10,
  },
  tagText: {
    color: white,
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 8,
    marginHorizontal: 14,
  },
  tagList: {flexWrap: 'wrap-reverse', flexDirection: 'row'},
  container: {flex: 1, backgroundColor: black},
  avatarImage: {
    height: 36,
    width: 36,
    borderRadius: 18,
    borderColor: white,
    borderWidth: 2,
    marginLeft: -13,
  },
  participants: {flexDirection: 'row', marginLeft: 13, marginTop: 10},
  length: {
    backgroundColor: afterPartyPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lengthText: {
    color: white,
    fontWeight: '300',
    fontSize: 14,
  },
  spreadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heart: {height: 24, width: 24, marginRight: 16},
});
