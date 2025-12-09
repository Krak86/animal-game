import { Animated, Text } from 'react-native';
import { appStyles } from '../styles/appStyles';

export const QuestionDisplay = ({ currentAnimal, translations, questionAnimation }) => {
  return (
    <Animated.View
      style={[
        appStyles.questionContainer,
        {
          opacity: questionAnimation,
          transform: [
            {
              scale: questionAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={appStyles.questionText}>{translations.findThe}</Text>
      <Text style={appStyles.animalNameText}>
        {currentAnimal ? translations.animals[currentAnimal.name] : ''}
      </Text>
    </Animated.View>
  );
};
