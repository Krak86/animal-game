import React, { useState, useRef, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Modal,
  Animated,
} from "react-native";

import { getLanguageDropdownStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Language } from "@/types";
import { useHoverEffect } from "@/hooks/useHoverEffect";
import { COLORS } from "@/styles/colors";

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const LANGUAGE_OPTIONS: Array<{ value: Language; label: string }> = [
  { value: "en", label: "EN" },
  { value: "uk", label: "УКР" },
  { value: "ru", label: "РУ" },
];

export const LanguageDropdown: React.FC<Props> = ({
  language,
  onLanguageChange,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getLanguageDropdownStyles(responsive);

  const [isOpen, setIsOpen] = useState(false);

  // Hover effects
  const hoverSelected = useHoverEffect({
    baseColor: COLORS.primaryLight,
  });

  const hoverOption0 = useHoverEffect({
    baseColor: LANGUAGE_OPTIONS[0].value === language ? COLORS.primaryLight : COLORS.white,
  });

  const hoverOption1 = useHoverEffect({
    baseColor: LANGUAGE_OPTIONS[1].value === language ? COLORS.primaryLight : COLORS.white,
  });

  const hoverOption2 = useHoverEffect({
    baseColor: LANGUAGE_OPTIONS[2].value === language ? COLORS.primaryLight : COLORS.white,
  });
  const [buttonLayout, setButtonLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const dropdownAnimation = useRef(new Animated.Value(0)).current;
  const arrowRotation = useRef(new Animated.Value(0)).current;

  const animateDropdown = useCallback((toValue: 0 | 1) => {
    Animated.parallel([
      Animated.spring(dropdownAnimation, {
        toValue,
        useNativeDriver: true,
        tension: 300,
        friction: 20,
      }),
      Animated.timing(arrowRotation, {
        toValue,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [dropdownAnimation, arrowRotation]);

  const toggleDropdown = useCallback(() => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    animateDropdown(newIsOpen ? 1 : 0);
  }, [isOpen, animateDropdown]);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    animateDropdown(0);
  }, [animateDropdown]);

  const handleLanguageSelect = useCallback(
    (lang: Language) => {
      onLanguageChange(lang);
      closeDropdown();
    },
    [onLanguageChange, closeDropdown]
  );

  const onButtonLayout = useCallback((event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setButtonLayout({ x, y, width, height });
  }, []);

  // Get current language label
  const currentLanguageLabel =
    LANGUAGE_OPTIONS.find((opt) => opt.value === language)?.label || language.toUpperCase();

  // Animated styles
  const dropdownOpacity = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const dropdownScale = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.9, 1],
  });

  const dropdownTranslateY = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 0],
  });

  const arrowRotationDeg = arrowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.selectedButton, { backgroundColor: hoverSelected.backgroundColor }, hoverSelected.cursorStyle]}>
        <TouchableOpacity
          style={styles.selectedButtonInner}
          onPress={toggleDropdown}
          onLayout={onButtonLayout}
          activeOpacity={0.7}
          {...hoverSelected.handlers}
        >
          <Text style={styles.selectedText}>{currentLanguageLabel}</Text>
          <Animated.Text
            style={[
              styles.arrowIcon,
              { transform: [{ rotate: arrowRotationDeg }] },
            ]}
          >
            ▼
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>

      <Modal
        visible={isOpen}
        transparent
        animationType="none"
        onRequestClose={closeDropdown}
      >
        <TouchableWithoutFeedback onPress={closeDropdown}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <Animated.View
                style={[
                  styles.dropdownContainer,
                  {
                    top: buttonLayout.y + buttonLayout.height + 4,
                    left: buttonLayout.x,
                    opacity: dropdownOpacity,
                    transform: [
                      { scale: dropdownScale },
                      { translateY: dropdownTranslateY },
                    ],
                  },
                ]}
              >
                {LANGUAGE_OPTIONS.map((option, index) => {
                  const isActive = option.value === language;
                  const isLast = index === LANGUAGE_OPTIONS.length - 1;
                  const hoverOption = index === 0 ? hoverOption0 : index === 1 ? hoverOption1 : hoverOption2;

                  return (
                    <Animated.View
                      key={option.value}
                      style={[
                        styles.optionButton,
                        isLast && styles.optionButtonLast,
                        isActive && styles.optionButtonActive,
                        { backgroundColor: hoverOption.backgroundColor },
                        hoverOption.cursorStyle,
                      ]}
                    >
                      <TouchableOpacity
                        style={styles.optionButtonInner}
                        onPress={() => handleLanguageSelect(option.value)}
                        activeOpacity={0.7}
                        {...hoverOption.handlers}
                      >
                        <Text
                          style={[
                            styles.optionText,
                            isActive && styles.optionTextActive,
                          ]}
                        >
                          {option.label}
                        </Text>
                      </TouchableOpacity>
                    </Animated.View>
                  );
                })}
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
