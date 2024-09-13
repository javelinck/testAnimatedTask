import React, {useEffect} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  FadeInDown,
} from 'react-native-reanimated';
import styles from './styles.ts';
import {getRandomAngle} from '../../helpers/get-random-angle.helper.ts';
import {ITEMS} from '../../constants';
import {Colors} from '../../styles/colors.ts';

const AnimatedComponent = () => {
  const createAxisStyle = (size: number) =>
    useAnimatedStyle(() => ({
      opacity: withTiming(axisOpacity.value, {duration: 1000}),
      width: size,
      height: size,
      borderRadius: size / 2,
    }));
  const axisOpacity = useSharedValue(0);
  const cardOpacity = useSharedValue(0);
  const itemsOpacity = ITEMS.map(() => useSharedValue(0));
  const itemAngles = ITEMS.map(() => useSharedValue(0));
  const randomAngles = ITEMS.map(() => getRandomAngle());

  const axisItems = [
    {style: createAxisStyle(150), delay: 200},
    {style: createAxisStyle(240), delay: 400},
    {style: createAxisStyle(330), delay: 600},
  ];

  const cardStyle = useAnimatedStyle(() => ({
    opacity: withTiming(cardOpacity.value, {duration: 1000}),
    transform: [{scale: withTiming(1, {duration: 1000})}, {rotate: '-5.84deg'}],
  }));

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    timeouts.push(
      setTimeout(() => {
        axisOpacity.value = 1;
      }, 500),
    );

    timeouts.push(
      setTimeout(() => {
        cardOpacity.value = 1;
      }, 1500),
    );

    ITEMS.forEach((item, index) => {
      timeouts.push(
        setTimeout(
          () => {
            itemsOpacity[index].value = 1;
            itemAngles[index].value = withRepeat(
              withTiming(2 * Math.PI, {
                duration: item.speed,
                easing: Easing.linear,
              }),
              -1,
            );
          },
          2500 + 500 * index,
        ),
      );
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      {axisItems.map(item => (
        <Animated.View
          key={item.delay}
          entering={FadeInDown.delay(item.delay).springify()}
          style={styles.wrapper}>
          <Animated.View style={[styles.axis, item.style]} />
        </Animated.View>
      ))}

      {ITEMS.map((item, index) => {
        const animatedItemStyle = useAnimatedStyle(() => {
          const angle = randomAngles[index] + itemAngles[index].value;
          const translateX = item.radius * Math.cos(angle);
          const translateY = item.radius * Math.sin(angle);

          return {
            opacity: withTiming(itemsOpacity[index].value, {duration: 1000}),
            position: 'absolute',
            transform: [{translateX}, {translateY}],
          };
        });

        return (
          <Animated.Image
            key={item.id}
            style={[
              styles.item,
              animatedItemStyle,
              {width: item.sideSize, height: item.sideSize},
            ]}
            source={item.image}
          />
        );
      })}

      <Animated.View style={[styles.card, cardStyle]}>
        <LinearGradient
          colors={[Colors.yellow, Colors.orange, Colors.orange, Colors.yellow]}
          locations={[0, 0.2, 0.8, 1]}
          start={{x: 0, y: 0}}
          end={{x: 0.9, y: 1}}
          style={styles.card}
        />
      </Animated.View>
    </View>
  );
};

export {AnimatedComponent};
