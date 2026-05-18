import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Pressable, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';

interface SettingsModalProps {
    visible: boolean;
    onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ visible, onClose }) => {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <Pressable style={styles.backdrop} onPress={onClose}>
                <Pressable style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Settings</Text>

                        <TouchableOpacity onPress={onClose} hitSlop={12}>
                            <Icon name="close" size={24} color={colors.text} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.rowLeft}>
                            <Icon name="notifications" size={22} color={colors.primary} />
                            <Text style={styles.rowText}>Notifications</Text>
                        </View>

                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: colors.border, true: colors.accent }}
                            thumbColor={colors.surface}
                        />
                    </View>

                    <View style={styles.row}>
                        <View style={styles.rowLeft}>
                            <Icon name="dark-mode" size={22} color={colors.primary} />
                            <Text style={styles.rowText}>Dark Mode</Text>
                        </View>

                        <Switch
                            value={darkModeEnabled}
                            onValueChange={setDarkModeEnabled}
                            trackColor={{ false: colors.border, true: colors.accent }}
                            thumbColor={colors.surface}
                        />
                    </View>

                    <TouchableOpacity style={styles.actionRow}>
                        <Icon name="person" size={22} color={colors.primary} />
                        <Text style={styles.rowText}>Edit Profile</Text>
                        <Icon name="chevron-right" size={24} color={colors.textSecondary} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Log Out</Text>
                    </TouchableOpacity>
                </Pressable>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        justifyContent: 'center',
        padding: 24,
    },
    modal: {
        backgroundColor: colors.surface,
        borderRadius: 24,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.text,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    rowText: {
        fontSize: 16,
        color: colors.text,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        gap: 12,
    },
    logoutButton: {
        marginTop: 16,
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 999,
        alignItems: 'center',
    },
    logoutText: {
        color: colors.surface,
        fontSize: 16,
        fontWeight: '700',
    },
});
