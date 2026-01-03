import React from "react";
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import { Language } from "@/types";
import {
  useResponsiveDimensions,
  ResponsiveDimensions,
} from "@/hooks/useResponsiveDimensions";

interface PrivacyPolicyModalProps {
  visible: boolean;
  onClose: () => void;
  language: Language;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  visible,
  onClose,
  language,
}) => {
  const insets = useSafeAreaInsets();
  const responsive = useResponsiveDimensions();
  const styles = getStyles(responsive);

  const openLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error("Error opening link:", error);
    }
  };

  const renderContent = () => {
    switch (language) {
      case "uk":
        return <PrivacyPolicyUK openLink={openLink} />;
      case "ru":
        return <PrivacyPolicyRU openLink={openLink} />;
      default:
        return <PrivacyPolicyEN openLink={openLink} />;
    }
  };

  const getTitle = () => {
    switch (language) {
      case "uk":
        return "Політика конфіденційності";
      case "ru":
        return "Политика конфиденциальности";
      default:
        return "Privacy Policy";
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="pageSheet"
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{getTitle()}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {renderContent()}
        </ScrollView>
      </View>
    </Modal>
  );
};

// English Version
const PrivacyPolicyEN: React.FC<{ openLink: (url: string) => void }> = ({
  openLink,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getContentStyles(responsive);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Privacy Policy for Animal Explorer 🐕🐈🦁
      </Text>

      <Text style={styles.subtitle}>Effective Date: January 3, 2026</Text>
      <Text style={styles.subtitle}>Contact: rukrak86@gmail.com</Text>

      <Text style={styles.heading}>Introduction</Text>
      <Text style={styles.paragraph}>
        Animal Explorer 🐕🐈🦁 ("we", "our", "the app") is an educational game
        designed primarily for children to learn animal names and sounds in
        English, Ukrainian, and Russian. This Privacy Policy explains how
        information is handled when you use our app or website.
      </Text>

      <Text style={styles.heading}>Information We Collect</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>First‑party data:</Text> We do{" "}
        <Text style={styles.bold}>not</Text> collect personal information,
        analytics, or set first‑party cookies.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Third‑party cookies and data:</Text> When
        viewing images or videos, third‑party services may set cookies or
        collect limited technical information. These services include:
      </Text>
      <Text style={styles.bullet}>• YouTube (video playback)</Text>
      <Text style={styles.bullet}>• Unsplash (image galleries)</Text>
      <Text style={styles.bullet}>
        • Wikipedia (external links for educational content)
      </Text>
      <Text style={styles.bullet}>
        • lonelycpp.github.io (react-native-youtube-iframe integration hosted on
        GitHub Pages)
      </Text>
      <Text style={styles.paragraph}>
        These third parties may collect information such as device identifiers,
        usage statistics, or preferences. We do not control these cookies
        directly.
      </Text>

      <Text style={styles.heading}>How Information Is Used</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Functionality only:</Text> Third‑party cookies
        are used solely to enable image galleries, video playback, and external
        educational links.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>No tracking by us:</Text> We do not use
        cookies for advertising, analytics, or personalization.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Children's privacy:</Text> As the app is
        primarily for children, we do not knowingly collect personal information
        from children. Any data collected by third‑party services is subject to
        their own privacy policies.
      </Text>

      <Text style={styles.heading}>Third‑Party Services</Text>
      <Text style={styles.paragraph}>
        Our app relies on external services to provide educational content:
      </Text>
      <Text style={styles.bullet}>• YouTube: For streaming animal videos.</Text>
      <Text style={styles.bullet}>
        • Unsplash: For displaying high‑quality animal images.
      </Text>
      <Text style={styles.bullet}>
        • Wikipedia: For linking to detailed animal information.
      </Text>
      <Text style={styles.bullet}>
        • lonelycpp.github.io (GitHub Pages): For embedding the YouTube player
        component.
      </Text>
      <Text style={styles.paragraph}>
        Each of these services has its own privacy practices. Please review
        their policies:
      </Text>
      <TouchableOpacity
        onPress={() => openLink("https://policies.google.com/privacy")}
      >
        <Text style={styles.link}>• YouTube Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openLink("https://unsplash.com/privacy")}
      >
        <Text style={styles.link}>• Unsplash Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink("https://foundation.wikimedia.org/wiki/Privacy_policy")
        }
      >
        <Text style={styles.link}>• Wikipedia Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink(
            "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          )
        }
      >
        <Text style={styles.link}>• GitHub Privacy Statement</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Children's Use</Text>
      <Text style={styles.paragraph}>
        Animal Explorer is intended primarily for children. We do not collect
        personal data directly. Parents and guardians should be aware that
        third‑party services (YouTube, Unsplash, Wikipedia, GitHub Pages) may
        collect limited technical information when content is displayed.
      </Text>

      <Text style={styles.heading}>Your Rights</Text>
      <Text style={styles.paragraph}>
        Depending on your location, you may have rights to:
      </Text>
      <Text style={styles.bullet}>
        • Access or delete data collected by third parties.
      </Text>
      <Text style={styles.bullet}>
        • Restrict or disable cookies through your browser or device settings.
      </Text>
      <Text style={styles.paragraph}>
        Please refer to the privacy policies of YouTube, Unsplash, Wikipedia,
        and GitHub for details on exercising these rights.
      </Text>

      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.paragraph}>
        If you have questions or concerns about this Privacy Policy, please
        contact us at:
      </Text>
      <Text style={styles.paragraph}>📧 rukrak86@gmail.com</Text>

      <Text style={styles.heading}>Changes to This Policy</Text>
      <Text style={styles.paragraph}>
        This Privacy Policy is effective as of the date above. We do not
        currently plan to update it regularly, but any future changes will be
        posted here.
      </Text>
    </View>
  );
};

// Ukrainian Version
const PrivacyPolicyUK: React.FC<{ openLink: (url: string) => void }> = ({
  openLink,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getContentStyles(responsive);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Політика конфіденційності для Animal Explorer 🐕🐈🦁
      </Text>

      <Text style={styles.subtitle}>
        Дата набуття чинності: 3 січня 2026 року
      </Text>
      <Text style={styles.subtitle}>Контакт: rukrak86@gmail.com</Text>

      <Text style={styles.heading}>Вступ</Text>
      <Text style={styles.paragraph}>
        Animal Explorer 🐕🐈🦁 ("ми", "наш", "додаток") — це освітня гра,
        розроблена в першу чергу для дітей, щоб вивчати назви та звуки тварин
        англійською, українською та російською мовами. Ця Політика
        конфіденційності пояснює, як обробляється інформація під час
        використання нашого додатка або вебсайту.
      </Text>

      <Text style={styles.heading}>Інформація, яку ми збираємо</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Дані першої сторони:</Text> Ми{" "}
        <Text style={styles.bold}>не</Text> збираємо особисту інформацію,
        аналітику або не встановлюємо файли cookie першої сторони.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Файли cookie та дані третіх сторін:</Text> Під
        час перегляду зображень або відео сторонні сервіси можуть встановлювати
        файли cookie або збирати обмежену технічну інформацію. До цих сервісів
        належать:
      </Text>
      <Text style={styles.bullet}>• YouTube (відтворення відео)</Text>
      <Text style={styles.bullet}>• Unsplash (галереї зображень)</Text>
      <Text style={styles.bullet}>
        • Wikipedia (зовнішні посилання для освітнього контенту)
      </Text>
      <Text style={styles.bullet}>
        • lonelycpp.github.io (інтеграція react-native-youtube-iframe, розміщена
        на GitHub Pages)
      </Text>
      <Text style={styles.paragraph}>
        Ці треті сторони можуть збирати інформацію, таку як ідентифікатори
        пристроїв, статистику використання або налаштування. Ми не контролюємо
        ці файли cookie безпосередньо.
      </Text>

      <Text style={styles.heading}>Як використовується інформація</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Лише для функціональності:</Text> Файли cookie
        третіх сторін використовуються виключно для забезпечення роботи галерей
        зображень, відтворення відео та зовнішніх освітніх посилань.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Ми не відстежуємо:</Text> Ми не використовуємо
        файли cookie для реклами, аналітики чи персоналізації.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Конфіденційність дітей:</Text> Оскільки
        додаток призначений в першу чергу для дітей, ми не збираємо особисту
        інформацію про дітей. Будь-які дані, зібрані сторонніми сервісами,
        підпадають під їхні власні політики конфіденційності.
      </Text>

      <Text style={styles.heading}>Сторонні сервіси</Text>
      <Text style={styles.paragraph}>
        Наш додаток використовує зовнішні сервіси для надання освітнього
        контенту:
      </Text>
      <Text style={styles.bullet}>
        • YouTube: Для потокового відтворення відео про тварин.
      </Text>
      <Text style={styles.bullet}>
        • Unsplash: Для відображення високоякісних зображень тварин.
      </Text>
      <Text style={styles.bullet}>
        • Wikipedia: Для посилань на детальну інформацію про тварин.
      </Text>
      <Text style={styles.bullet}>
        • lonelycpp.github.io (GitHub Pages): Для вбудовування компонента
        YouTube плеєра.
      </Text>
      <Text style={styles.paragraph}>
        Кожен із цих сервісів має власні практики конфіденційності. Будь ласка,
        ознайомтеся з їхніми політиками:
      </Text>
      <TouchableOpacity
        onPress={() => openLink("https://policies.google.com/privacy")}
      >
        <Text style={styles.link}>• Політика конфіденційності YouTube</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openLink("https://unsplash.com/privacy")}
      >
        <Text style={styles.link}>• Політика конфіденційності Unsplash</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink("https://foundation.wikimedia.org/wiki/Privacy_policy")
        }
      >
        <Text style={styles.link}>• Політика конфіденційності Wikipedia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink(
            "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          )
        }
      >
        <Text style={styles.link}>• Політика конфіденційності GitHub</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Використання дітьми</Text>
      <Text style={styles.paragraph}>
        Animal Explorer призначений в першу чергу для дітей. Ми не збираємо
        особисті дані безпосередньо. Батьки та опікуни повинні знати, що
        сторонні сервіси (YouTube, Unsplash, Wikipedia, GitHub Pages) можуть
        збирати обмежену технічну інформацію під час відображення контенту.
      </Text>

      <Text style={styles.heading}>Ваші права</Text>
      <Text style={styles.paragraph}>
        Залежно від вашого місцезнаходження, ви можете мати права на:
      </Text>
      <Text style={styles.bullet}>
        • Доступ або видалення даних, зібраних третіми сторонами.
      </Text>
      <Text style={styles.bullet}>
        • Обмеження або відключення файлів cookie через налаштування браузера
        або пристрою.
      </Text>
      <Text style={styles.paragraph}>
        Будь ласка, зверніться до політик конфіденційності YouTube, Unsplash,
        Wikipedia та GitHub для отримання деталей щодо реалізації цих прав.
      </Text>

      <Text style={styles.heading}>Зв'яжіться з нами</Text>
      <Text style={styles.paragraph}>
        Якщо у вас є запитання або занепокоєння щодо цієї Політики
        конфіденційності, будь ласка, зв'яжіться з нами за адресою:
      </Text>
      <Text style={styles.paragraph}>📧 rukrak86@gmail.com</Text>

      <Text style={styles.heading}>Зміни до цієї політики</Text>
      <Text style={styles.paragraph}>
        Ця Політика конфіденційності набуває чинності з дати, зазначеної вище.
        Ми наразі не плануємо регулярно оновлювати її, але будь-які майбутні
        зміни будуть опубліковані тут.
      </Text>
    </View>
  );
};

// Russian Version
const PrivacyPolicyRU: React.FC<{ openLink: (url: string) => void }> = ({
  openLink,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getContentStyles(responsive);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Политика конфиденциальности для Animal Explorer 🐕🐈🦁
      </Text>

      <Text style={styles.subtitle}>
        Дата вступления в силу: 3 января 2026 года
      </Text>
      <Text style={styles.subtitle}>Контакт: rukrak86@gmail.com</Text>

      <Text style={styles.heading}>Введение</Text>
      <Text style={styles.paragraph}>
        Animal Explorer 🐕🐈🦁 ("мы", "наш", "приложение") — это образовательная
        игра, разработанная в первую очередь для детей, чтобы изучать названия и
        звуки животных на английском, украинском и русском языках. Настоящая
        Политика конфиденциальности объясняет, как обрабатывается информация при
        использовании нашего приложения или вебсайта.
      </Text>

      <Text style={styles.heading}>Информация, которую мы собираем</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Данные первой стороны:</Text> Мы{" "}
        <Text style={styles.bold}>не</Text> собираем личную информацию,
        аналитику или не устанавливаем файлы cookie первой стороны.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Файлы cookie и данные третьих сторон:</Text>
        При просмотре изображений или видео сторонние сервисы могут
        устанавливать файлы cookie или собирать ограниченную техническую
        информацию. Эти сервисы включают:
      </Text>
      <Text style={styles.bullet}>• YouTube (воспроизведение видео)</Text>
      <Text style={styles.bullet}>• Unsplash (галереи изображений)</Text>
      <Text style={styles.bullet}>
        • Wikipedia (внешние ссылки для образовательного контента)
      </Text>
      <Text style={styles.bullet}>
        • lonelycpp.github.io (интеграция react-native-youtube-iframe,
        размещённая на GitHub Pages)
      </Text>
      <Text style={styles.paragraph}>
        Эти третьи стороны могут собирать информацию, такую как идентификаторы
        устройств, статистику использования или настройки. Мы не контролируем
        эти файлы cookie напрямую.
      </Text>

      <Text style={styles.heading}>Как используется информация</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Только для функциональности:</Text> Файлы
        cookie третьих сторон используются исключительно для обеспечения работы
        галерей изображений, воспроизведения видео и внешних образовательных
        ссылок.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Мы не отслеживаем:</Text> Мы не используем
        файлы cookie для рекламы, аналитики или персонализации.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Конфиденциальность детей:</Text> Поскольку
        приложение предназначено в первую очередь для детей, мы не собираем
        личную информацию о детях. Любые данные, собранные сторонними сервисами,
        подпадают под их собственные политики конфиденциальности.
      </Text>

      <Text style={styles.heading}>Сторонние сервисы</Text>
      <Text style={styles.paragraph}>
        Наше приложение использует внешние сервисы для предоставления
        образовательного контента:
      </Text>
      <Text style={styles.bullet}>
        • YouTube: Для потокового воспроизведения видео о животных.
      </Text>
      <Text style={styles.bullet}>
        • Unsplash: Для отображения высококачественных изображений животных.
      </Text>
      <Text style={styles.bullet}>
        • Wikipedia: Для ссылок на детальную информацию о животных.
      </Text>
      <Text style={styles.bullet}>
        • lonelycpp.github.io (GitHub Pages): Для встраивания компонента YouTube
        плеера.
      </Text>
      <Text style={styles.paragraph}>
        Каждый из этих сервисов имеет свои собственные практики
        конфиденциальности. Пожалуйста, ознакомьтесь с их политиками:
      </Text>
      <TouchableOpacity
        onPress={() => openLink("https://policies.google.com/privacy")}
      >
        <Text style={styles.link}>• Политика конфиденциальности YouTube</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openLink("https://unsplash.com/privacy")}
      >
        <Text style={styles.link}>• Политика конфиденциальности Unsplash</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink("https://foundation.wikimedia.org/wiki/Privacy_policy")
        }
      >
        <Text style={styles.link}>• Политика конфиденциальности Wikipedia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink(
            "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          )
        }
      >
        <Text style={styles.link}>• Политика конфиденциальности GitHub</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Использование детьми</Text>
      <Text style={styles.paragraph}>
        Animal Explorer предназначен в первую очередь для детей. Мы не собираем
        личные данные напрямую. Родители и опекуны должны знать, что сторонние
        сервисы (YouTube, Unsplash, Wikipedia, GitHub Pages) могут собирать
        ограниченную техническую информацию при отображении контента.
      </Text>

      <Text style={styles.heading}>Ваши права</Text>
      <Text style={styles.paragraph}>
        В зависимости от вашего местоположения, вы можете иметь права на:
      </Text>
      <Text style={styles.bullet}>
        • Доступ или удаление данных, собранных третьими сторонами.
      </Text>
      <Text style={styles.bullet}>
        • Ограничение или отключение файлов cookie через настройки браузера или
        устройства.
      </Text>
      <Text style={styles.paragraph}>
        Пожалуйста, обратитесь к политикам конфиденциальности YouTube, Unsplash,
        Wikipedia и GitHub для получения деталей относительно реализации этих
        прав.
      </Text>

      <Text style={styles.heading}>Свяжитесь с нами</Text>
      <Text style={styles.paragraph}>
        Если у вас есть вопросы или опасения относительно этой Политики
        конфиденциальности, пожалуйста, свяжитесь с нами по адресу:
      </Text>
      <Text style={styles.paragraph}>📧 rukrak86@gmail.com</Text>

      <Text style={styles.heading}>Изменения в этой политике</Text>
      <Text style={styles.paragraph}>
        Настоящая Политика конфиденциальности вступает в силу с даты, указанной
        выше. Мы в настоящее время не планируем регулярно обновлять её, но любые
        будущие изменения будут опубликованы здесь.
      </Text>
    </View>
  );
};

const getStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: responsive.spacing.lg,
      paddingVertical: responsive.spacing.md,
      borderBottomWidth: 2,
      borderBottomColor: COLORS.lightGray,
    },
    headerTitle: {
      fontSize: 22 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.dark,
      flex: 1,
    },
    closeButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: COLORS.lightGray,
      justifyContent: "center",
      alignItems: "center",
    },
    closeButtonText: {
      fontSize: 24 * responsive.fontScale,
      color: COLORS.dark,
      fontFamily: FONTS.bold,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: responsive.spacing.lg,
      paddingVertical: responsive.spacing.md,
    },
  });

const getContentStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    content: {
      paddingBottom: responsive.spacing.xl,
    },
    title: {
      fontSize: 20 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.dark,
      marginBottom: responsive.spacing.md,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 14 * responsive.fontScale,
      fontFamily: FONTS.medium,
      color: COLORS.gray,
      marginBottom: responsive.spacing.xs,
      textAlign: "center",
    },
    heading: {
      fontSize: 18 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.dark,
      marginTop: responsive.spacing.lg,
      marginBottom: responsive.spacing.sm,
    },
    paragraph: {
      fontSize: 15 * responsive.fontScale,
      fontFamily: FONTS.regular,
      color: COLORS.dark,
      lineHeight: 22 * responsive.fontScale,
      marginBottom: responsive.spacing.sm,
    },
    bold: {
      fontFamily: FONTS.bold,
    },
    bullet: {
      fontSize: 15 * responsive.fontScale,
      fontFamily: FONTS.regular,
      color: COLORS.dark,
      lineHeight: 22 * responsive.fontScale,
      marginBottom: responsive.spacing.xs,
      marginLeft: responsive.spacing.sm,
    },
    link: {
      fontSize: 15 * responsive.fontScale,
      fontFamily: FONTS.regular,
      color: COLORS.accent,
      lineHeight: 22 * responsive.fontScale,
      marginBottom: responsive.spacing.xs,
      marginLeft: responsive.spacing.sm,
      textDecorationLine: "underline",
    },
  });
