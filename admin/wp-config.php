<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'compostelle' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?<;JQQ:,Sxfs5@+|r[7|6JMB,1O{sx O3j|f~N?rJY nQcQ{fmk+g:g`:6&WESP;' );
define( 'SECURE_AUTH_KEY',  'urgUJ-Jb3;gI.sPJtAJzPke_uxRqg1U9BQ4nKmd>0(vnJ=a?=>-p=neMn3j7EcUL' );
define( 'LOGGED_IN_KEY',    '<(9bj:ZJm  v} 9}I[ LEpe1X9i&y/(NR^zAVKYAqdK RHGNU9G^/jMyqYCYMjFZ' );
define( 'NONCE_KEY',        'D0i&aK$=<$AQAj-N&Gg7&n~JPTC(n]tj(fimmwJ[s!Z%y<[~/!qiWoc@$/GW2r7d' );
define( 'AUTH_SALT',        '->z=7+2I$ P2e@@*_EQb#JIt]-j%GOd1`gsP3BTg~_E8_n{))it8yBa}dV7~]x06' );
define( 'SECURE_AUTH_SALT', '[f.5HTXI)TnZ,;r&S2h;%}Bi2SFH`6-Pgrg{ft@wL$cpCv(V!Z>&.XVN?AJ6(JV9' );
define( 'LOGGED_IN_SALT',   'ye! lu>o}5j=IK21)9eu@=H~~IT[O om=NS;H5{s]vVGha~w4r$kbMUDhI87*/?i' );
define( 'NONCE_SALT',       ':_cW3N?-h=XFH/QkW;jni$uYFVF+YM0M%d,`z8*sLA8>I;&~WJri*Z+o8aW*8iv!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
