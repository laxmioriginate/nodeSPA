// var mongoose = require('mongoose')
//   , User = mongoose.model('User')
//   //, async = require('async');

// module.exports = function (app, auth) {


//   // user routes
//   var partials = require('../controllers/partials');
//   app.get('/partials/:resource/:page', partials.partials);
  
//   // TODO TURN THESE INTO PARTIALS user Sessions
//   var sessions = require('../controllers/sessions');
//   app.post('/api/sessions/login', sessions.login);
//   app.get('/api/sessions/session', sessions.session);
//   app.post('/api/sessions/logout', sessions.logout);
//   app.post('/api/sessions/resetPassword', sessions.requestResetToken);
//   app.post('/api/sessions/resetPassword/:token', sessions.resetPassword);


//   var users = require('../controllers/users');
//   app.get('/api/users', auth.requiresLogin, auth.isAdmin, users.index);
//   app.post('/api/users', auth.requiresLogin, auth.isAdmin, users.create);
//   app.post('/api/users/favorite_topics', auth.requiresLogin, users.createFavorite);
//   app.delete('/api/users/favorite_topics', auth.requiresLogin, users.deleteFavorite);
//   app.get('/api/users/:userId', auth.requiresLogin, users.show);
//   app.put('/api/users/:userId', auth.requiresLogin, users.update);
//   app.delete('/api/users/:userId', auth.requiresLogin, auth.isAdmin, users.destroy);

//   app.get('/api/users/usersExport/:export', auth.requiresLogin, auth.isAdmin, users.usersExport);

//   app.get('/api/register/:organizationId', users.orgUserRegistration);
//   app.post('/api/register/:organizationId', users.orgUserCreation);

//   app.param('userId', users.user);

//   var adminPage = require('../controllers/admin_dataset');
//   app.get('/api/adminPage/series', adminPage.findAllTopics);
//   // app.get('/api/userSeries')
//   // console.log(userSeries.adminDataset.toString());
  
//   var networks = require('../controllers/networks');

//   app.get('/api/networks', networks.index);
//   app.post('/api/networks', networks.create);
//   app.get('/api/networks/:name', networks.show);
//   app.put('/api/networks/:name', networks.update);
//   app.delete('/api/networks/:name', networks.destroy);
//   app.get('/api/networks/:name/series', networks.getSeries);
//   app.get('/api/favorites', networks.faves);

//   var genres = require('../controllers/genres');
//   app.get('/api/genres',                        genres.index);
//   app.post('/api/genres',                       genres.create);
//   app.get('/api/genres/:genreId',               genres.show);
//   app.put('/api/genres/:genreId',               genres.update);
//   app.delete('/api/genres/:genreId',               genres.destroy);

//   app.param('genreId', genres.genre);

//   var recap = require('../controllers/recap');
//   app.get('/api/:version/recap',            auth.requiresLogin,  recap.index);
//   app.get('/api/:version/recap/:id',        auth.requiresLogin,  recap.get);
//   app.delete('/api/:version/recap/:id',     auth.requiresLogin,  auth.isAdmin,  recap.destroy);
//   app.get('/api/:version/recap_cluster/:id',auth.requiresLogin,  recap.combinedCluster);

//   var moments = require('../controllers/moments');
  
//   app.get('/api/:version/topic_moments',  auth.requiresLogin, moments.topicMoments);
//   app.get('/api/:version/moments',        auth.requiresLogin, auth.isAdmin, moments.index);
//   app.delete('/api/:version/moments',        auth.requiresLogin, auth.isAdmin, moments.destroy);

//   var external_services = require('../controllers/external_services');
//   app.post('/api/search',                   auth.requiresLogin, auth.isAdmin, external_services.showResults);
//   app.post('/api/make_moments',             auth.requiresLogin, auth.isAdmin, external_services.momentsResults);
//   app.post('/api/train',                    auth.requiresLogin, auth.isAdmin, external_services.showTrainResults);
//   app.post('/api/make_recap',               auth.requiresLogin, auth.isAdmin, external_services.makeRecap);
//   app.post('/api/run_compare',              auth.requiresLogin,               external_services.runCompare);
//   app.post('/api/entities_train',           auth.requiresLogin, auth.isAdmin, external_services.showEntitiesTrainResults);
//   app.post('/api/classify',                 auth.requiresLogin,               external_services.classify);
//   app.post('/api/create_users_screen_name', auth.requiresLogin,               external_services.sendPluckrUsers);
//   app.post('/api/create_friend_connections',auth.requiresLogin,               external_services.sendUserConnections);
//   app.post('/api/twitter_connections',      auth.requiresLogin,               external_services.sendFollowings);
//   app.post('/api/twitter_ids',              auth.requiresLogin,               external_services.pullUsersFromIds);
//   app.get('/api/pluckr_status',             auth.requiresLogin,               external_services.checkPluckrStatus);

//   // organization routes
//   var organizations = require('../controllers/organizations');
//   app.get('/api/organizations',             auth.requiresLogin, auth.isAdmin, organizations.index);
//   app.post('/api/organizations',            auth.requiresLogin, auth.isAdmin, organizations.create);
//   app.get('/api/organizations/:orgId',      auth.requiresLogin,               organizations.show);
//   app.put('/api/organizations/:orgId',      auth.requiresLogin, auth.isAdmin, organizations.update);
//   app.delete('/api/organizations/:orgId',      auth.requiresLogin, auth.isAdmin, organizations.destroy);
//   app.post('/api/organizations/deactivate',      auth.requiresLogin, auth.isAdmin, organizations.deactivate);
//   app.post('/api/organizations/activate',      auth.requiresLogin, auth.isAdmin, organizations.activate);

//   // topic_permissions routes
//   var topic_permissions = require('../controllers/topic_permissions');
//   //app.get('/api/:version/topic_permissions',             auth.requiresLogin, auth.isAdmin, topic_permissions.index);
//   app.post('/api/:version/topic_permissions/:topic_id',            auth.requiresLogin, auth.isAdmin, topic_permissions.create);
//   app.delete('/api/:version/topic_permissions/:topic_id',      auth.requiresLogin, auth.isAdmin, topic_permissions.destroy);

//   // topic routes
//   var topics = require('../controllers/topics')

//   app.get('/api/topics',                              auth.requiresLogin,               topics.index);
//   app.post('/api/topics',                             auth.requiresLogin, auth.isAdmin, topics.create);
//   app.put('/api/topics/:topic_id',                    auth.requiresLogin, auth.isAdmin, topics.update);
//   app.delete('/api/topics/:topic_id',                 auth.requiresLogin, auth.isAdmin, topics.destroy);
//   app.get('/api/topics/:topic_id',                    auth.requiresLogin,               topics.show);
//   app.get('/api/topics/series/:series_name',          auth.requiresLogin,               topics.getBySeriesName);
//   app.get('/api/topics/networks/:network_name',       auth.requiresLogin,               topics.getByNetworkName);
//   app.get('/api/topics/genres/:genre',                auth.requiresLogin,              topics.getByGenre);

//   app.post('/api/topics/:id/cluster',  auth.requiresLogin, auth.isAdmin, topics.cluster);

//   //these will be implemeted later
//   app.get('/api/:version/topics',                     auth.requiresLogin,               topics.index);
//   app.post('/api/:version/topics',                    auth.requiresLogin, auth.isAdmin, topics.create);
//   app.post('/api/:version/topicsLookup',              auth.requiresLogin, topics.topicsLookup);
//   app.get('/api/:version/topics/count',               auth.requiresLogin,               topics.count);
//   app.get('/api/:version/topics/clusterpernetwork',   auth.requiresLogin,               topics.clusterPerNetwork);
//   app.get('/api/:version/topics/clusterpergenre',     auth.requiresLogin,               topics.clusterPerGenre);
//   app.get('/api/:version/topics/days_with_datasets',  auth.requiresLogin,               topics.daysWithDatasets);
//   app.get('/api/:version/favorite_topics',                     auth.requiresLogin,               topics.userFavoriteTopics);
//   app.put('/api/:version/topics/:id',           auth.requiresLogin, auth.isAdmin, topics.update);
//   app.delete('/api/:version/topics/:id',           auth.requiresLogin, auth.isAdmin, topics.destroy);
//   app.get('/api/:version/topics/:id',           auth.requiresLogin,               topics.show);
//   app.get('/api/:version/topics/previous/:id',           auth.requiresLogin,               topics.previous);
//   app.post('/api/:version/topics/:id/cluster',  auth.requiresLogin, auth.isAdmin, topics.cluster);

//   app.post('/api/:version/topics/:topic_id/organizations/:organization_id',    auth.requiresLogin, auth.isAdmin, topics.createPermission);
//   app.delete('/api/:version/topics/:topic_id/organizations/:organization_id',     auth.requiresLogin, auth.isAdmin, topics.deletePermission);
//   app.put('/api/:version/topics/:topic_id/syndicate', auth.requiresLogin, auth.isAdmin, topics.updateSyndicate);

//   app.get('/api/:version/reaction_rate_avgs',                  auth.requiresLogin,              topics.reactionRateAvgs);

//   app.post('/api/:version/topics/distinct', auth.requiresLogin, topics.distinctField);

//   //Series routes
//   var series = require('../controllers/series')
//   app.get('/api/:version/series/:seriesId/details', series.details);
//   app.get('/api/:version/series/:seriesId', series.show);

//   // topic routes
//   var tweets = require('../controllers/tweets');

//   // app.put('/api/:version/flag_tweet/:id',                                       auth.requiresLogin, auth.isAdmin, tweets.createFlag);
//   // app.delete('/api/:version/flag_tweet/:id',                                     auth.requiresLogin, auth.isAdmin, tweets.removeFlag);

//   app.get('/api/:version/tweets',                                               auth.requiresLogin, tweets.rawTweetsV2);
//   app.get('/api/:version/tweets/:topic_identifier',                             auth.requiresLogin, tweets.topicTweetsV2);
//   app.get('/api/:version/tweets/:topic_identifier/:cluster_key',                auth.requiresLogin, tweets.clusterTweetsV2);
//   //app.post('/api/:version/topIntersectionSeries',                             auth.requiresLogin, tweets.topIntersectionSeries);

//   var esTweets = require('../controllers/es_tweets');

//   app.get('/api/:version/es_clustered_tweets/:topic_identifier',                auth.requiresLogin, esTweets.esClusteredTweetTimeSeries);
//   app.get('/api/:version/es_tweets/:topic_identifier',                          auth.requiresLogin, esTweets.esTweetTimeSeries);
//   app.get('/api/:version/es_tweets_count/:topic_identifier',                    auth.requiresLogin, esTweets.esCountQuery);
//   app.get('/api/:version/es_clustered_tweets_count/:topic_identifier',          auth.requiresLogin, esTweets.esClusteredCountQuery);
//   app.get('/api/:version/es_clustered_terms/:topic_identifier',                 auth.requiresLogin, esTweets.clusteredTermAggregation);
//   app.get('/api/:version/es_terms/:topic_identifier',                           auth.requiresLogin, esTweets.termAggregation);
//   app.get('/api/:version/es_xls/:topic_identifier',                             auth.requiresLogin, esTweets.esXLSExport);

//   /** TODO:audience START **/
//   var audience = require('../controllers/audience');
  
//   app.get('/api/:version/audience/overlap',                                     auth.requiresLogin, audience.getOverlapRequest);
//   app.get('/api/:version/audience/top_followed',                                auth.requiresLogin, audience.getTopFollowedRequest);
//   app.get('/api/:version/audience/top_reacting',                                auth.requiresLogin, audience.getTopReactingRequest);
//   app.get('/api/:version/audience/author/:authorId',                            auth.requiresLogin, audience.getAuthorRequest);
//   app.get('/api/:version/audience/authors',                                     auth.requiresLogin, audience.getAuthorsRequest);


//   var insight = require('../controllers/insight');
  
//   app.get('/api/:version/insight/:id',                                         auth.requiresLogin, insight.show);
//   /** TODO:audience END **/


//   app.get('/api/:version/es_clustered_terms',                                   auth.requiresLogin, esTweets.rawClusteredTermAggregation);
//   app.get('/api/:version/es_terms',                                             auth.requiresLogin, esTweets.rawTermAggregation);

//   app.get('/api/:version/es_emotions_time_series/:topic_identifier',            auth.requiresLogin, auth.isAdmin, esTweets.esEmotionsTimeSeries);
//   app.get('/api/:version/es_emotions_terms/:topic_identifier',                  auth.requiresLogin, esTweets.esEmotionsTerms);  
//   app.get('/api/:version/es_emotions_sample/:topic_identifier',                 auth.requiresLogin, esTweets.esEmotionsSample);
//   app.get('/api/:version/es_reaction_retweets/:topic_identifier',                  auth.requiresLogin, esTweets.esRetweetService);  

//   var landing_page_search = require('../controllers/landing_page_search');

//   app.get('/api/:version/landingSearch',                                        auth.requiresLogin, landing_page_search.index);
//   app.get('/api/:version/landingSearch/temporal',                               auth.requiresLogin, landing_page_search.temporalSearch);


//   var benchmark = require('../controllers/benchmark');


//   app.get('/api/:version/benchmark_tokens/:topic_identifier',                   auth.requiresLogin, benchmark.tokenBenchmark);
//   app.get('/api/:version/benchmark_tokens',                                     auth.requiresLogin, benchmark.rawTokenBenchmark);
//   app.get('/api/:version/emotion_counts',                                       auth.requiresLogin, benchmark.emotionCounts);
  
//   var emotion_benchmarks = require('../controllers/emotion_benchmarks');

//   app.get('/api/:version/emotion_benchmarks',                                   auth.requiresLogin, emotion_benchmarks.benchmarks);
//   app.get('/api/:version/emotion_benchmark_average',                            auth.requiresLogin, emotion_benchmarks.benchmarkAverages);


//   var mappings = require('../controllers/mappings');

//   app.get('/api/:version/majors',                                               auth.requiresLogin, mappings.getMajors);
//   app.get('/api/:version/mappings',                                             auth.requiresLogin, auth.isAdmin, mappings.getMappings);
//   app.get('/api/:version/majors',                                               auth.requiresLogin, mappings.getMajors);
//   app.get('/api/:version/mappings',                                             auth.requiresLogin, mappings.getMappings);

//   var iq_media = require('../controllers/iq_media');

//   var contextPanel =  require('../controllers/context_panel');

//   app.get('/api/:version/contextEmotionAvgs/:emotion/:season/:seriesId/:network/:genres/:daypart', contextPanel.contextEmotionAvgs);
//   app.get('/api/:version/contextAvgs/:season/:seriesId/:network/:genres/:daypart', contextPanel.contextAvgs);
//   app.get('/api/:version/distinctTags/:season/:seriesId/:network/:genres/:daypart', contextPanel.distinctTags);
//   app.get('/api/:version/distinctTag/:tag', contextPanel.distinctTag);
//   app.get('/api/:version/topicIdEmotionCounts/:topicId', contextPanel.topicIdEmotionCounts);
//   app.post('/api/:version/recapEmotionCounts/', contextPanel.recapEmotionCounts);


//   function hasVideosEnabled(req, res, next) {

//     // Check if the user org has videos enabled
//     if (req.user && req.user._doc && req.user._doc.organization && req.user._doc.organization._doc && req.user._doc.organization._doc.videosEnabled) {
//       next();
//     } else {
//       res.status(403).send('You need to be logged in and your organization must have videos enabled')
//     }
//   }

//   app.get('/api/:version/iQMedia/mediaUrl/:topic_id', auth.requiresLogin, hasVideosEnabled, iq_media.GetMediaPlayerUrl);

// }
