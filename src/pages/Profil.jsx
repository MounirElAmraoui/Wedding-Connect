import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Camera, Lock, Bell, 
  Shield, Link2, Edit2, Check, Star, Calendar,
  Heart, Award, Upload, Trash2, Share2,
  Globe, ChevronRight, Save, X
} from 'lucide-react';
import './Profil.css';

const Profil = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [userType] = useState('couple'); // 'couple' ou 'vendor'
  
  const [profileData, setProfileData] = useState({
    // Info de base
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 234 567 890',
    location: 'Paris, France',
    bio: 'Planning our dream wedding in Tuscany. Looking for the perfect venue and photographers!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    coverPhoto: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200',
    
    // Spécifique Couple
    partnerName: 'Michael',
    weddingDate: '2024-09-15',
    weddingLocation: 'Tuscany, Italy',
    budget: '25000',
    
    // Spécifique Vendor
    companyName: '',
    category: '',
    experience: '',
    
    // Réseaux sociaux
    instagram: '@sarah_mike_wedding',
    facebook: '',
    website: '',
    
    // Paramètres
    notifications: {
      email: true,
      sms: false,
      promotions: true,
      bookings: true
    },
    
    // Sécurité
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (key) => {
    setProfileData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Ici: appel API pour sauvegarder
    alert('Profil mis à jour avec succès !');
  };

  const completionRate = 85; // Pourcentage de complétion du profil

  const renderPersonalInfo = () => (
    <div className="profile-section">
      <div className="section-header">
        <h2>Informations Personnelles</h2>
        <button 
          className={`edit-btn ${isEditing ? 'active' : ''}`}
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
        >
          {isEditing ? <><Save size={18} /> Enregistrer</> : <><Edit2 size={18} /> Modifier</>}
        </button>
      </div>

      <div className="info-grid">
        <div className="info-group">
          <label>Prénom</label>
          {isEditing ? (
            <input 
              type="text" 
              value={profileData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          ) : (
            <p>{profileData.firstName}</p>
          )}
        </div>

        <div className="info-group">
          <label>Nom</label>
          {isEditing ? (
            <input 
              type="text" 
              value={profileData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          ) : (
            <p>{profileData.lastName}</p>
          )}
        </div>

        <div className="info-group full-width">
          <label>Email</label>
          {isEditing ? (
            <div className="input-with-icon">
              <Mail size={18} />
              <input 
                type="email" 
                value={profileData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
          ) : (
            <p className="with-icon"><Mail size={16} /> {profileData.email}</p>
          )}
        </div>

        <div className="info-group">
          <label>Téléphone</label>
          {isEditing ? (
            <div className="input-with-icon">
              <Phone size={18} />
              <input 
                type="tel" 
                value={profileData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          ) : (
            <p className="with-icon"><Phone size={16} /> {profileData.phone}</p>
          )}
        </div>

        <div className="info-group">
          <label>Localisation</label>
          {isEditing ? (
            <div className="input-with-icon">
              <MapPin size={18} />
              <input 
                type="text" 
                value={profileData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              />
            </div>
          ) : (
            <p className="with-icon"><MapPin size={16} /> {profileData.location}</p>
          )}
        </div>

        <div className="info-group full-width">
          <label>Bio</label>
          {isEditing ? (
            <textarea 
              rows="4"
              value={profileData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              placeholder="Parlez-nous de vous..."
            />
          ) : (
            <p className="bio-text">{profileData.bio}</p>
          )}
        </div>
      </div>

      {userType === 'couple' && (
        <div className="wedding-details">
          <h3>Détails du Mariage</h3>
          <div className="info-grid">
            <div className="info-group">
              <label>Nom du/de la partenaire</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={profileData.partnerName}
                  onChange={(e) => handleInputChange('partnerName', e.target.value)}
                />
              ) : (
                <p><Heart size={16} className="icon-gold" /> {profileData.partnerName}</p>
              )}
            </div>

            <div className="info-group">
              <label>Date du mariage</label>
              {isEditing ? (
                <div className="input-with-icon">
                  <Calendar size={18} />
                  <input 
                    type="date" 
                    value={profileData.weddingDate}
                    onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                  />
                </div>
              ) : (
                <p className="with-icon"><Calendar size={16} /> {new Date(profileData.weddingDate).toLocaleDateString('fr-FR')}</p>
              )}
            </div>

            <div className="info-group">
              <label>Lieu du mariage</label>
              {isEditing ? (
                <div className="input-with-icon">
                  <MapPin size={18} />
                  <input 
                    type="text" 
                    value={profileData.weddingLocation}
                    onChange={(e) => handleInputChange('weddingLocation', e.target.value)}
                  />
                </div>
              ) : (
                <p className="with-icon"><MapPin size={16} /> {profileData.weddingLocation}</p>
              )}
            </div>

            <div className="info-group">
              <label>Budget estimé</label>
              {isEditing ? (
                <div className="input-with-icon">
                  <span className="currency">$</span>
                  <input 
                    type="number" 
                    value={profileData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                  />
                </div>
              ) : (
                <p className="with-icon"><Award size={16} className="icon-gold" /> ${parseInt(profileData.budget).toLocaleString()}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSecurity = () => (
    <div className="profile-section">
      <div className="section-header">
        <h2>Sécurité</h2>
      </div>

      <div className="security-form">
        <div className="form-group">
          <label>Mot de passe actuel</label>
          <div className="password-input">
            <Lock size={18} />
            <input type="password" placeholder="••••••••" />
          </div>
        </div>

        <div className="form-group">
          <label>Nouveau mot de passe</label>
          <div className="password-input">
            <Lock size={18} />
            <input type="password" placeholder="Min. 8 caractères" />
          </div>
        </div>

        <div className="form-group">
          <label>Confirmer le mot de passe</label>
          <div className="password-input">
            <Lock size={18} />
            <input type="password" placeholder="Répétez le mot de passe" />
          </div>
        </div>

        <button className="save-password-btn">
          Mettre à jour le mot de passe
        </button>

        <div className="security-options">
          <h3>Authentification à deux facteurs</h3>
          <div className="option-row">
            <div className="option-info">
              <Shield size={20} />
              <div>
                <span>Authentification SMS</span>
                <small>Recevez un code par SMS à chaque connexion</small>
              </div>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="profile-section">
      <div className="section-header">
        <h2>Notifications</h2>
      </div>

      <div className="notifications-list">
        {Object.entries(profileData.notifications).map(([key, value]) => (
          <div key={key} className="notification-item">
            <div className="notification-info">
              <Bell size={20} />
              <div>
                <span className="notification-title">
                  {key === 'email' && 'Notifications par email'}
                  {key === 'sms' && 'Notifications SMS'}
                  {key === 'promotions' && 'Promotions et offres'}
                  {key === 'bookings' && 'Mises à jour des réservations'}
                </span>
                <small>
                  {key === 'email' && 'Recevez les mises à jour importantes par email'}
                  {key === 'sms' && 'Notifications urgentes par message texte'}
                  {key === 'promotions' && 'Offres spéciales et réductions exclusives'}
                  {key === 'bookings' && 'Confirmations et rappels de réservation'}
                </small>
              </div>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={value}
                onChange={() => handleNotificationChange(key)}
              />
              <span className="slider"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSocial = () => (
    <div className="profile-section">
      <div className="section-header">
        <h2>Réseaux Sociaux</h2>
      </div>

      <div className="social-connections">
        <div className="social-item">
          <div className="social-icon instagram">
            <Share2 size={24} />
          </div>
          <div className="social-info">
            <span>Instagram</span>
            {isEditing ? (
              <input 
                type="text" 
                value={profileData.instagram}
                onChange={(e) => handleInputChange('instagram', e.target.value)}
                placeholder="@votre_compte"
              />
            ) : (
              <small>{profileData.instagram || 'Non connecté'}</small>
            )}
          </div>
          {!isEditing && (
            <button className="connect-btn connected">
              <Check size={16} /> Connecté
            </button>
          )}
        </div>

        <div className="social-item">
          <div className="social-icon facebook">
            <Share2 size={24} />
          </div>
          <div className="social-info">
            <span>Facebook</span>
            <small>Non connecté</small>
          </div>
          <button className="connect-btn">Connecter</button>
        </div>

        <div className="social-item">
          <div className="social-icon website">
            <Globe size={24} />
          </div>
          <div className="social-info">
            <span>Site Web</span>
            {isEditing ? (
              <input 
                type="url" 
                value={profileData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://..."
              />
            ) : (
              <small>{profileData.website || 'Aucun site web'}</small>
            )}
          </div>
          {!isEditing && profileData.website && (
            <button className="connect-btn connected">
              <Check size={16} /> Ajouté
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-page">
      {/* Cover Photo */}
      <div className="cover-photo">
        <img src={profileData.coverPhoto} alt="Cover" />
        {isEditing && (
          <button className="change-cover-btn">
            <Camera size={20} /> Changer la photo de couverture
          </button>
        )}
      </div>

      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header-card">
          <div className="avatar-section">
            <div className="avatar-wrapper">
              <img src={profileData.avatar} alt="Profile" />
              {isEditing && (
                <button className="change-avatar-btn">
                  <Camera size={16} />
                </button>
              )}
              <div className="verified-badge">
                <Check size={12} />
              </div>
            </div>
            <div className="user-title">
              <h1>{profileData.firstName} {profileData.lastName}</h1>
              <span className="user-role">
                {userType === 'couple' ? 'Couple' : 'Prestataire'} • Membre depuis 2024
              </span>
              <div className="location-tag">
                <MapPin size={14} /> {profileData.location}
              </div>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat">
              <Star size={20} className="icon-gold" />
              <div>
                <span className="value">4.9</span>
                <small>Note</small>
              </div>
            </div>
            <div className="stat">
              <Check size={20} className="icon-gold" />
              <div>
                <span className="value">12</span>
                <small>Réservations</small>
              </div>
            </div>
            <div className="completion-stat">
              <div className="circular-progress" style={{'--progress': `${completionRate}%`}}>
                <span>{completionRate}%</span>
              </div>
              <small>Profil complété</small>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-content">
          {/* Sidebar Navigation */}
          <div className="profile-sidebar">
            <nav className="profile-nav">
              <button 
                className={activeSection === 'personal' ? 'active' : ''}
                onClick={() => setActiveSection('personal')}
              >
                <User size={20} /> Informations
                <ChevronRight size={16} className="arrow" />
              </button>
              <button 
                className={activeSection === 'security' ? 'active' : ''}
                onClick={() => setActiveSection('security')}
              >
                <Lock size={20} /> Sécurité
                <ChevronRight size={16} className="arrow" />
              </button>
              <button 
                className={activeSection === 'notifications' ? 'active' : ''}
                onClick={() => setActiveSection('notifications')}
              >
                <Bell size={20} /> Notifications
                <ChevronRight size={16} className="arrow" />
              </button>
              <button 
                className={activeSection === 'social' ? 'active' : ''}
                onClick={() => setActiveSection('social')}
              >
                <Link2 size={20} /> Réseaux sociaux
                <ChevronRight size={16} className="arrow" />
              </button>
            </nav>

            <div className="profile-sidebar-footer">
              <button className="danger-btn">
                <Trash2 size={18} /> Supprimer le compte
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="profile-main">
            {activeSection === 'personal' && renderPersonalInfo()}
            {activeSection === 'security' && renderSecurity()}
            {activeSection === 'notifications' && renderNotifications()}
            {activeSection === 'social' && renderSocial()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;